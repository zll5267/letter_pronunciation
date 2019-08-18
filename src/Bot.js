 /**
  * @file base bot file
  * @author
  */
const StaticDataProvider = require('./StaticDataProvider');
const queryString = require('querystring')
const BaseBot = require('bot-sdk');
const Hint = BaseBot.Directive.Display.Hint;
const RenderTemplate = BaseBot.Directive.Display.RenderTemplate;
const ListTemplate1 = BaseBot.Directive.Display.Template.ListTemplate1;
const ListTemplate3 = BaseBot.Directive.Display.Template.ListTemplate3;
const ListTemplateItem = BaseBot.Directive.Display.Template.ListTemplateItem;
const TextImageTemplate = require('bot-sdk/lib/directive/Display/Template/TextImageTemplate');
const Document = require('bot-sdk/lib/directive/DPL/Document');
const RenderDocument = require('bot-sdk/lib/directive/DPL/RenderDocument');
const BodyImageTemplate = BaseBot.Directive.Display.Template.BodyTemplate5;
const BodyLeftImageRightText = BaseBot.Directive.Display.Template.BodyTemplate3;
const PlayerInfo = BaseBot.Directive.AudioPlayer.PlayerInfo;
const VideoPlay = BaseBot.Directive.VideoPlayer.Play;
const VideoStop = BaseBot.Directive.VideoPlayer.Stop;
const AudioPlay = BaseBot.Directive.AudioPlayer.Play;
const AudioStop = BaseBot.Directive.AudioPlayer.Stop;
const PlayPauseButton = BaseBot.Directive.AudioPlayer.Control.PlayPauseButton;
const NextButoon = BaseBot.Directive.AudioPlayer.Control.NextButton;
const PreviousButton = BaseBot.Directive.AudioPlayer.Control.PreviousButton;
const ShowPlayListButton = BaseBot.Directive.AudioPlayer.Control.ShowPlayListButton;

class Bot extends BaseBot {

    /**
     * base64编码得到token
     *
     * @param {Object} token 对象
     * @return {string}
     */
    genToken(token) {
        let tokenStr = queryString.stringify(token);
        let buffer = Buffer.from(tokenStr);
        let str = buffer.toString('base64');
        return str;
    }

    /**
     * base64解码得到 string 格式 token
     * '{page: '', item: ''}'
     *
     * @param {String} str string base64对象
     * @return {string}
     */
    decodeToken(str) {
        let buffer = Buffer.from(str, 'base64');
        let token = queryString.parse(buffer.toString());
        return token;
    }

    /**
     * 构造方法
     *
     * @param {Object} postData Dueros入参
     */
    constructor(postData) {
        super(postData);
        this.dataProvider = new StaticDataProvider();
        //  意图1:处理技能启动
        this.addLaunchHandler(this.launch);
        //  意图2：处理技能结束
        this.addSessionEndedHandler(this.sessionEndedRequest);
        //  意图3：开始学习
        this.addIntentHandler('com.ll.pronunciation.teaching_start', this.startLearnIntent);
        // 意图： 重复，再来一遍
        this.addIntentHandler('com.ll.pronunciation.teaching_repeat', this.repeatLearnIntent);
        // 意图： 下一个
        this.addIntentHandler('ai.dueros.common.next_intent', this.nextLearnIntent);
        this.addIntentHandler('ai.dueros.common.previous_intent', this.preLearnIntent);
        // 意图：从某个字符开始
        this.addIntentHandler('com.ll.pronunciation.specific_letter_pronunciation', this.specificLetterLearnIntent);
        ////  意图4：音频模板界面
        //this.addIntentHandler('audio', this.audioIntent);
        ////  意图5：选择第几个
        //this.addIntentHandler('ai.dueros.common.choose_action', this.chooseIntent);
        //this.addIntentHandler('ai.dueros.music.goto', this.musicgotoIntent);
        //this.addIntentHandler('ai.dueros.video.goto', this.videogotoIntent);
        ////  意图6：暂停播放
        //this.addIntentHandler('ai.dueros.common.pause_intent', this.pauseIntent);
        ////  意图7：继续播放
        //this.addIntentHandler('ai.dueros.common.continue_intent', this.continueIntent);
        ////  意图8：返回指定界面
        //this.addIntentHandler('back', this.backIntent);
        ////  事件1：屏幕点击事件
        //this.addEventListener('Display.ElementSelected', this.ScreenClickedEvent);
        ////  事件2：音频播放结束事件
        //this.addEventListener('AudioPlayer.PlaybackFinished', this.audioPlaybackFinished);
        ////  事件3：视频播放结束事件
        //this.addEventListener('VideoPlayer.videoPlaybackNearlyFinished', this.videoPlaybackNearlyFinished);
        ////  事件4：音频上报
        //this.addEventListener('AudioPlayer.ProgressReportIntervalElapsed', this.defaultEvent);
        ////  事件5：视频上报
        //this.addEventListener('VideoPlayer.ProgressReportIntervalElapsed', this.defaultEvent);
        ////  事件6: 音频开始播放事件
        //this.addEventListener('AudioPlayer.PlaybackStarted', this.audioPlayStarted);
        ////  事件6: 视频开始播放事件
        //this.addEventListener('VideoPlayer.PlaybackStarted', this.videoPlayStarted);



        //  兜底
        this.addDefaultEventListener(this.defaultEvent);
    }

    /**
     * launch意图
     *
     * @return {Object}
     */
    launch() {
        this.waitAnswer();
        this.setExpectSpeech(true);
        let template = this.getHomeCard();
        let speech = `欢迎来到字母发音, 这里会教你如何念26个英文字母，快点跟我说开始吧`;
        let reprompt = `可以直接对我说开始学习吧`;
        let hint = new Hint('从头开始', '从第3个开始');

        return {
            outputSpeech: speech,
            reprompt: reprompt,
            directives: [hint, template]
        };
    }

    /**
      */
    getPlayLetterResult(letter) {
        let letterInfo = this.dataProvider.getLetterInfo(letter);
        console.log("letterInfo",letterInfo);
        let letterSoundUrl = letterInfo.sound;
        if (!letterSoundUrl) {
            letterSoundUrl = this.dataProvider.getletterDefaultSoundURL();
        }
        //letterSoundUrl = this.dataProvider.getletterDefaultSoundURL();
        let speech = `<speak> 让我们来听听这个字母的发音,
            <audio src="${letterSoundUrl}"></audio>, <silence time="1s"></silence>,
            <audio src="${letterSoundUrl}"></audio>, <silence time="1s"></silence>,
            来跟我一起读一次，
            <audio src="${letterSoundUrl}"></audio>, <silence time="2.5s"></silence>,
            播放完了，你学会了么？可以跟我说再来一遍，或者下一个 </speak>`;
        //let speech = `<speak> 让我们来听听这个字母的发音, <say-as  interpret-as="as-character">${letter}</say-as>, 播放完了，学会了么？ </speak>`;
        let reprompt = '再来一遍，还是下一个呢';
        let template = this.getLetterPlayCard(letter);
        console.log('====',template);
        //  定义hint指令
        let hint = new Hint(['再来一遍', '下一个']);
        return {
            outputSpeech: speech,
            reprompt: reprompt,
            directives: [hint, template]
        };
    }
    /**
     * 开始学习意图
     *
     * @return {Object}
     */
    startLearnIntent() {
        this.waitAnswer();
        this.setExpectSpeech(true);

        console.log("startLearnIntent==");
        let play_letter = 'a';

        let letter = this.getSlot('english_letter');
        let number = this.getSlot('sys.number');
        if (letter && letter.length === 1 && (letter >= 'a' && letter <= 'z')) {
            play_letter = letter.toLowerCase();
        }
        if (number) {
            let num = parseInt(number);
            if (num >= 0 && num < 26) {
                play_letter = String.fromCharCode('a'.charCodeAt(0) + num);
            }
        }
        return this.getPlayLetterResult(play_letter);
    }

    specificLetterLearnIntent() {
        this.waitAnswer();
        this.setExpectSpeech(true);

        console.log("specificLetterLearnIntent==");
        let play_letter = 'a';

        let letter = this.getSlot('english_letter');
        let number = this.getSlot('sys.number');
        if (letter && letter.length === 1 && (letter >= 'a' && letter <= 'z')) {
            play_letter = letter.toLowerCase();
        }
        if (number) {
            let num = parseInt(number);
            if (num > 0 && num <= 26) {
                play_letter = String.fromCharCode('a'.charCodeAt(0) + num - 1);
            }
        }
        return this.getPlayLetterResult(play_letter);
    }
    /**
     * 重复意图
     *
     * @return {Object}
     */
    repeatLearnIntent() {
        this.waitAnswer();
        this.setExpectSpeech(true);
        console.log("repeatLearnIntent==");

        let context = this.request.getScreenContext();
        let tokenStr = context.template.token ? context.template.token : '';
        let token = tokenStr ? this.decodeToken(tokenStr) : null;
        let play_letter = 'a';
        let letter = play_letter;

        console.log("token", token);
        if (token) {
            if (token.page && token.page === 'letterPlay') {
                letter = token.letter ? token.letter : play_letter;
            }
        }

        if (letter && letter.length === 1 && (letter >= 'a' && letter <= 'z')) {
            play_letter = letter;
        }

        return this.getPlayLetterResult(play_letter);
    }

    nextLearnIntent() {
        this.waitAnswer();
        this.setExpectSpeech(true);
        console.log("nextLearnIntent==");

        let context = this.request.getScreenContext();
        let tokenStr = context.template.token ? context.template.token : '';
        let token = tokenStr ? this.decodeToken(tokenStr) : null;
        let play_letter = 'z';
        let letter = play_letter;

        console.log("token", token);
        if (token) {
            if (token.page && token.page === 'letterPlay') {
                letter = token.letter ? token.letter : play_letter;
            }
        }

        if (letter && letter.length === 1 && (letter >= 'a' && letter < 'z')) {
            play_letter = letter;
        }
        if (play_letter >= 'a' && play_letter < 'z') {
            play_letter = String.fromCharCode(play_letter.charCodeAt(0) + 1);
        }

        return this.getPlayLetterResult(play_letter);
    }
    preLearnIntent() {
        this.waitAnswer();
        this.setExpectSpeech(true);
        console.log("preLearnIntent==");

        let context = this.request.getScreenContext();
        let tokenStr = context.template.token ? context.template.token : '';
        let token = tokenStr ? this.decodeToken(tokenStr) : null;
        let play_letter = 'a';
        let letter = play_letter;

        console.log("token", token);
        if (token) {
            if (token.page && token.page === 'letterPlay') {
                letter = token.letter ? token.letter : play_letter;
            }
        }

        if (letter && letter.length === 1 && (letter > 'a' && letter <= 'z')) {
            play_letter = letter;
        }
        if (play_letter > 'a' && play_letter <= 'z') {
            play_letter = String.fromCharCode(play_letter.charCodeAt(0) - 1);
        }

        return this.getPlayLetterResult(play_letter);
    }
    /**
     * 音频意图
     *
     * @return {Object}
     */
    audioIntent() {
        this.waitAnswer();

        let audioName = this.getSlot('audioname');
        if (audioName) {
            let audio = this.getDetailBy('audio', 'title', audioName);
            let directives = this.getAudioPlay(audio.id);
            if (directives) {
                return {
                    directives: directives
                };
            }
            let speech = '没有找到你要播放的视频';
            let hint = new Hint(['第一个', '我想听告白气球']);
            let template = this.getAudioCard();
            return {
                outputSpeech: speech,
                directives: [hint, template]
            };
        }
        let speech = '请选择你想要听的歌曲';
        let reprompt = '没有听懂，请告诉我想要听的歌曲';
        let template = this.getAudioCard();

        //  定义hint指令
        let hint = new Hint(['第一个', '我想听告白']);

        return {
            outputSpeech: speech,
            reprompt: reprompt,
            directives: [hint, template]
        };
    }

    /**
     * 选择意图
     *
     * @return {Object}
     */
    chooseIntent() {
        this.waitAnswer();

        let context = this.request.getScreenContext();
        let token = context.template.token ? context.template.token : '';
        let page = token.page ? token.page : '';
        let index = this.getSlot('index');
        //  index从1开始
        //  let audioPlayerContext = this.request.getAudioPlayerContext();
        //  let videoPlayerContext = this.request.getVideoPlayerContext();

        //  let audioToken = audioPlayerContext['token'] ? audioPlayerContext['token'] : '';
        //  let videoToken = videoPlayerContext['token'] ? videoPlayerContext['token'] : '';

        if (page === 'home') {
            if (index === '1') {
                return this.videoIntent();
            }
            if (index === '2') {
                return this.audioIntent();
            }
        }
        if (page === 'video') {
            let directives = this.getVideoPlay(index);
            return {
                directives: directives
            };
        }
        if (page === 'audio') {
            let directives = this.getAudioPlay(index);
            return {
                directives: directives
            };
        }
    }

    musicgotoIntent() {
        console.log("musicgotoIntent");
        this.waitAnswer();

        let context = this.request.getScreenContext();
        //console.log("screen.template:" + JSON.stringify(context.template));
        let tokenStr = context.template ? context.template.token : '';

        let token = tokenStr ? this.decodeToken(tokenStr) : null;
        let page = token ? token.page : '';
        console.log("token:" + page);
        let index = this.getSlot('num');

        console.log('page:' + page);
        console.log('index:' + index);

        if (page === 'home') {
            if (index === '1') {
                return this.videoIntent();
            }
            if (index === '2') {
                return this.audioIntent();
            }

            let speech = '无法处理, 你是要看视频还是音频呢？';
            let reprompt = '看看视频或听听音频';
            //  定义hint指令
            let hint = new Hint(['看看视频', '听听音频']);

            return {
                outputSpeech: speech,
                reprompt: reprompt,
                directives: [hint]
            };
        }
        if (page === 'video') {
            let directives = this.getVideoPlay(index);
            if (!directives.length) {
                console.log("musicgotoIntent video waitAnswer");

                //let speech = `找不到第${index}个视频, 可以告诉我你要听的视频名`;
                let speech = '告诉我你要看的视频吧';
                if (index) {
                    speech = `找不到第${index}个视频,请选择要看的视频`;
                }
                let reprompt = '请选择要看的视频';
                //  定义hint指令
                let hint = new Hint(['第一个', '告白气球']);
                this.setExpectSpeech(true);

                return {
                    outputSpeech: speech,
                    reprompt: reprompt,
                    directives: [hint]
                };
            }
            return {
                directives: directives
            };
        }
        if (page === 'audio') {
            let directives = this.getAudioPlay(index);
            if (!directives.length) {
                console.log("audio musicgotoIntent video waitAnswer");

                let speech = '告诉我你要听的音频吧';
                if (index) {
                    speech = `找不到第${index}个音频,请选择要看的音频`;
                }
                let reprompt = '请选择要看的音频';
                //  定义hint指令
                let hint = new Hint(['第二个', '告白']);
                this.setExpectSpeech(true);

                return {
                    outputSpeech: speech,
                    reprompt: reprompt,
                    directives: [hint]
                };
            }
            this.setExpectSpeech(false);
            return {
                directives: directives
            };
        }

        let speech = '无法处理, 再试试其他指令吧';
        let reprompt = '没有听懂，请告诉我想要听的歌曲';
        //  定义hint指令
        let hint = new Hint(['第一个', '我想听告白']);

        return {
            outputSpeech: speech,
            reprompt: reprompt,
            directives: [hint]
        };
    }

    videogotoIntent() {
        this.waitAnswer();
        console.log('video goto intent');
        let index = 1;
        let directives = this.getVideoPlay(index);
        return {
            directives: directives
        };
    }

    /**
     * 返回意图
     *
     * @return {Object}
     */
    backIntent() {
        this.waitAnswer();
        let back = this.getSlot('back');
        if (!back) {
            back = 'home';
        }
        if (back === '视频模板') {
            return this.videoIntent();
        }
        if (back === '音频模板') {
            return this.audioIntent();
        }
        if (back === 'home') {
            let template = this.getHomeCard();
            let speech = `欢迎使用MK样例，请试着说出 ${Bot.servers[Math.floor(Math.random() * 2)]}`;

            let directive = new Hint(Bot.servers[Math.floor(Math.random() * 2)]);
            return {
                outputSpeech: speech,
                directives: [directive, template]
            };
        }
    }

    /**
     * 暂停播放意图
     *
     * @return {Object}
     */
    pauseIntent() {
        this.waitAnswer();
        this.setExpectSpeech(false);

        let audioPlayerContext = this.request.getAudioPlayerContext();
        let videoPlayerContext = this.request.getVideoPlayerContext();

        //  let audioToken = audioPlayerContext['token'] ? audioPlayerContext['token'] : '';
        //  let videoToken = videoPlayerContext['token'] ? videoPlayerContext['token'] : '';


        if (audioPlayerContext) {
            let directive = new AudioStop();
            return {
                directives: [directive]
            };
        }
        if (videoPlayerContext) {
            let directive = new VideoStop();
            return {
                directives: [directive]
            };
        }
        return this.defaultRes();
    }

    /**
     * 继续播放意图
     *
     * @return {Object}
     */
    continueIntent() {
        console.log("continueIntent");
        this.waitAnswer();

        let audioPlayerContext = this.request.getAudioPlayerContext();
        let videoPlayerContext = this.request.getVideoPlayerContext();

        if (audioPlayerContext) {
            let audioToken = audioPlayerContext.token ? audioPlayerContext.token : '';
            let aToken = this.decodeToken(audioToken);
            let id = aToken.id ? aToken.id : 0;
            let offsetInMilliseconds =
                audioPlayerContext.offsetInMilliseconds ? audioPlayerContext.offsetInMilliseconds : 0;
            let directives = this.getAudioPlay(id, offsetInMilliseconds);
            return {
                directives: directives
            };
        }
        if (videoPlayerContext) {
            let videoToken = videoPlayerContext.token ? videoPlayerContext.token : '';
            let vToken = this.decodeToken(videoToken);
            let id = vToken.id ? vToken.id : 0;
            let offsetInMilliseconds =
                videoPlayerContext.offsetInMilliseconds ? videoPlayerContext.offsetInMilliseconds : 0;
            let directives = this.getVideoPlay(id, offsetInMilliseconds);
            console.log('ofms:' + offsetInMilliseconds);
            return {
                directives: directives
            };
        }
        return this.defaultRes();
    }

    /**
     * 屏幕点击事件
     *
     * @return {(Object|null)}
     */
    ScreenClickedEvent() {
        this.waitAnswer();
        let data = this.request.getData();
        let url = data.request.token ? data.request.token : '';
        if (!url) {
            this.setExpectSpeech(false);
            return;
        }

        let page = url.page ? url.page : '';
        //  item 是当前页面
        let item = url.item ? url.item : '';

        if (page === 'home' && item === 'video') {
            return this.videoIntent();
        }
        if (page === 'home' && item === 'audio') {
            return this.audioIntent();
        }
        if (page === 'video') {
            //  page如果不为home，item则存的是id
            let directives = this.getVideoPlay(item);
            return {
                directives: directives
            };
        }
        if (page === 'audio') {
            let directives = this.getAudioPlay(item);
            return {
                directives: directives
            };
        }
    }

    /**
     * audio PlaybackFinished
     *
     * @param {Object} event 事件
     * @return {Object}
     */
    audioPlaybackFinished(event) {
        console.log("audioPlaybackFinished");
        this.waitAnswer();
        this.setExpectSpeech(false);
        let audioToken = event.token ? event.token : '';
        if (audioToken.id && audioToken.index) {
            let id = audioToken.id;
            id = parseInt(id, 10) + 1;
            let directives = this.getAudioPlay(id.toString());
            return {
                directives: directives
            };
        }
    }

    /**
     * video PlaybackNearlyFinished
     *
     * @param {Object} event 事件
     * @return {Object}
     */
    videoPlaybackNearlyFinished(event) {
        console.log("videoPlaybackNearlyFinished");
        this.waitAnswer();
        this.setExpectSpeech(false);
        let videoToken = event.token ? event.token : '';

        if (videoToken.id && videoToken.index) {
            let id = videoToken.id;
            id = parseInt(id, 10) + 1;
            let directives = this.getVideoPlay(id.toString());
            return {
                directives: directives
            };
        }
    }

    /**
     * 默认事件
     */
    defaultEvent() {
        console.log('default event');
        this.waitAnswer();
        this.setExpectSpeech(false);
    }

    /**
     * 获取主页卡片
     *
     * @return {RenderTemplate}
     */
    getHomeCard() {

        let token = {
            page: 'home'
        };

        //let homePage = new TextImageTemplate('TextImageTemplate');
        //let homePage = new BodyImageTemplate();
        //  设置模板token
        //homePage.setToken(this.genToken(token));
        //  设置模版标题
        //homePage.setTitle('欢迎来到英文字母发音');
        //homePage.setImage(this.dataProvider.getHomeBackgroundImage());
        //homePage.setPlainContent("学习英文字母发音");
        //homePage.addImages(this.dataProvider.getHomeBackgroundImage());
        let homePage = new ListTemplate3();
        homePage.setToken(this.genToken(token));
        homePage.setTitle('欢迎来到英文字母发音');
        homePage.setBackGroundImage(this.dataProvider.getLetterPlayCardBackgroundImage());

        for(let i=97; i<123; ++i) {
            let current_char = String.fromCharCode(i);
            let itemToken = {
                page: 'home',
                letter: current_char
            }
            let letterInfo = this.dataProvider.getLetterInfo(current_char);
            //console.log("letterInfo",letterInfo);
            let picUrl = letterInfo.homeImage;

            let listTemplateItem = new ListTemplateItem();
            listTemplateItem.setToken(this.genToken(itemToken));
            listTemplateItem.setImage(picUrl);
            listTemplateItem.setContent(current_char.toUpperCase());

            //  把listTemplateItem添加到模版listItems
            homePage.addItem(listTemplateItem);
        }

        //  定义RenderTemplate指令
        let directive = new RenderTemplate(homePage);
        return directive;
    }

    /**
     * 字母播放界面卡片
     * @param letter String
     * @return {Object}
     */
    getLetterPlayCard(letter) {
        let token = {
            page: 'letterPlay',
            letter: letter
        };

        //let dpl = this.dataProvider.getLetterPlayCard();
        //let doc = new Document(dpl);
        //let result = new RenderDocument();
        //result.setDocument(doc);
        let template = new BodyLeftImageRightText();
        template.setToken(this.genToken(token));
        let letterInfo = this.dataProvider.getLetterInfo(letter);

        template.setBackGroundImage(this.dataProvider.getLetterPlayCardBackgroundImage());
        template.setImage(letterInfo.image);
        template.setPlainContent(letterInfo.desc);

        //  定义RenderTemplate指令
        let result = new RenderTemplate(template);
        return result;
    }

    /**
     * 音频界面卡片
     *
     * @return {Object}
     */
    getAudioCard() {
        let listTemplate = new ListTemplate1();
        //  设置模板token
        let tokenArr = {
            page: 'audio'
        };
        listTemplate.setToken(this.genToken(tokenArr));
        //  设置模板标题
        listTemplate.setTitle('音频示例');
        //  getaudioCard
        let audioList = this.getPlayList(Bot.TYPE_AUDIO);
        if (audioList instanceof Array && audioList.length > 0) {
            for (let i = 0, len = audioList.length; i < len; i++) {
                let id = audioList[i].id ? audioList[i].id : '';
                let title = audioList[i].title ? audioList[i].title : '';
                let introduction = audioList[i].intro ? audioList[i].intro : '';
                let picUrl = audioList[i].picurl ? audioList[i].picurl : '';
                let token = {
                    page: 'audio',
                    item: id.toString()
                };
                //  设置模版列表数组listItems其中一项，即列表的一个元素
                let listTemplateItem = new ListTemplateItem();
                listTemplateItem.setToken(this.genToken(token));
                listTemplateItem.setImage(picUrl);
                listTemplateItem.setPlainPrimaryText(title);
                listTemplateItem.setPlainSecondaryText(introduction);

                //  把listTemplateItem添加到模版listItems
                listTemplate.addItem(listTemplateItem);
            }
        }
        //  定义RenderTemplate指令
        let template = new RenderTemplate(listTemplate);
        return template;
    }

    /**
     * 获取音频或视频的播放列表
     *
     * @param {string} type 类型
     * @return {Object}
     */
    getPlayList(type) {
        let list = require('./data');

        if (type === 'video') {
            if (list.video) {
                return list.video;
            }
        }
        if (type === 'audio') {
            if (list.audio) {
                return list.audio;
            }
        }
        //  此时应该返回为false；
        return list;
    }

    /**
     * 视频播放
     *
     * @param {string} id id
     * @return {Array}
     */
    getVideoPlay(id, offsetInMilliseconds = 0) {
        this.setExpectSpeech(false);

        let token = {
            type: 'video',
            id: id
        };

        let video = this.getDetailBy('video', 'id', id);
        let directives = [];
        if (video) {
            let directive = new VideoPlay(video.url, 'REPLACE_ALL');
            directive.setReportIntervalInMs(10000);
            directive.setReportDelayInMs(10000);
            directive.setOffsetInMilliseconds(offsetInMilliseconds);
            directive.setToken(this.genToken(token));

            let hint = new Hint(['返回视频模板']);
            directives.push(directive);
            directives.push(hint);
        }
        return directives;
    }

    /**
     * 音频播放
     *
     * @param {string} id id
     * @return {Array}
     */
    getAudioPlay(id, offsetInMilliseconds = 0) {
        this.setExpectSpeech(false);

        let token = {
            type: 'audio',
            id: id
        };

        let audio = this.getDetailBy('audio', 'id', id);
        let directives = [];
        if (audio) {
            let directive = new AudioPlay(audio.url, 'REPLACE_ALL');
            directive.setOffsetInMilliSeconds(offsetInMilliseconds);
            let playerInfo = new PlayerInfo();
            let playpause = new PlayPauseButton();
            let previous = new PreviousButton();

            let next = new NextButoon();
            let showPlayList = new ShowPlayListButton();
            showPlayList.setEnabled(false);
            let controls = [playpause, previous, next, showPlayList];
            playerInfo.setControls(controls);
            playerInfo.setTitle(audio.title);
            playerInfo.setTitleSubtext1(audio.intro);
            playerInfo.setArt(Bot.IMAGE_AUDIO_PLAY);
            playerInfo.setProvider("MK", Bot.IMAGE_AUDIO_LOGO);
            directive.setPlayerInfo(playerInfo);
            directive.setToken(this.genToken(token));
            let hint = new Hint(['返回音频模板']);
            directives.push(directive);
            directives.push(hint);
        }
        return directives;
    }

    /**
     * 根据名字或者id来获取音频或者视频
     *
     * @param {string} type "video"|"audio"
     * @param {string} element "title"|"id"
     * @param {string} value  name|id
     * @return {(Array|boolean)}
     */
    getDetailBy(type, element, value) {
        if (type === 'video') {
            let videoList = this.getPlayList(type);
            if (videoList instanceof Array && videoList.length > 0) {
                for (let i = 0, len = videoList.length; i < len; i++) {
                    let temp = videoList[i][element] ? videoList[i][element] : '';
                    if (temp === value) {
                        return videoList[i];
                    }
                }
            }
        }
        if (type === 'audio') {
            let audioList = this.getPlayList(type);
            if (audioList instanceof Array && audioList.length > 0) {
                for (let i = 0, len = audioList.length; i < len; i++) {
                    let temp = audioList[i][element] ? audioList[i][element] : '';
                    if (temp === value) {
                        return audioList[i];
                    }
                }
            }
        }
        return false;
    }

    //  音频开始播放事件
    /**
     * 音频播放事件
     */
    audioPlayStarted() {
        console.log("audioPlayStarted");
        this.waitAnswer();
    }

    //  视频开始播放事件
    /**
     * 视频播放事件
     */
    videoPlayStarted() {
        console.log("videoPlayStarted");
        this.waitAnswer();
    }

    /**
     * 兜底结果
     *
     * @return {Object}
     */
    defaultRes() {
        this.setExpectSpeech(false);
        return {
            outputSpeech: '默认回复,MK的样例演示'
        };
    }

    /**
     * sessionEndedRequest处理
     */
    sessionEndedRequest() {
        this.endDialog();
        return {
            outputSpeech: this.dataProvider.getEndSessionSpeech()
        };
    }
}

Bot.SERVER_VIDEO = '看看视频';
Bot.SERVER_AUDIO = '听听音频';

Bot.TYPE_VIDEO = 'video';
Bot.TYPE_AUDIO = 'audio';
 //  IMAGE_URL
Bot.IMAGE_VIDEO = 'http://dbp-resource.gz.bcebos.com/89bb1ce6-2dff-3b1e-19b8-5af8fdcf33ee/video.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-03-15T07%3A05%3A16Z%2F-1%2F%2F3123652fdeed55ca95095600ed63fb3ff8c84299cfb97e18515b2499e6c806bb';
Bot.IMAGE_AUDIO = 'http://dbp-resource.gz.bcebos.com/89bb1ce6-2dff-3b1e-19b8-5af8fdcf33ee/audio.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-03-15T07%3A05%3A16Z%2F-1%2F%2Fa74bacc562d2d7fe6e8f80e7902dcad8550d01c1d0f061459ed0cce12ad80095';

Bot.IMAGE_AUDIO_PLAY = 'http://dbp-resource.gz.bcebos.com/89bb1ce6-2dff-3b1e-19b8-5af8fdcf33ee/blue_sky.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-03-15T07%3A00%3A43Z%2F-1%2F%2F789121a833e2e7d7cdb2bf565471b997b1fe4d3621938181e4eb4e6be7aab633';

Bot.IMAGE_AUDIO_LOGO = 'http://dbp-resource.gz.bcebos.com/89bb1ce6-2dff-3b1e-19b8-5af8fdcf33ee/audio_play.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-03-15T07%3A47%3A58Z%2F-1%2F%2F3580dc36d94118b319022315ee108205242c4701b0333320a7c5c5d8c76b66ae';

Bot.servers = [
    Bot.SERVER_VIDEO,
    Bot.SERVER_AUDIO
];

module.exports = Bot;
