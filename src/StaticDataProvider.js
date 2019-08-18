'use strict';

let letter_play_card = {
    "type": "DPL",
    "version": "1.0",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "items": [
            {
                "type": "Image",
                "height": "100%",
                "width": "100%",
                "position": "absolute",
                "left": "0dp",
                "top": "0dp",
                "src": "http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/play_card_bg.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-17T14%3A25%3A24Z%2F-1%2F%2Fae861841e4d4f970dc08a1b43997b3a79446cf5425ab060f165cf7113334ad8b"
            },
            {
                "type": "Container",
                "width": "100%",
                "height": "100%",
                "items": [
                    {
                        "type": "Header",
                        "headerImage": "https://skillstore.cdn.bcebos.com/icon/23/fc7581b7-b505-1f44-ab52-3d9f5e567dfd.png"
                    },
                    {
                        "type": "Container",
                        "flex-direction": "row",
                        "width": "100%",
                        "height": "100%",
                        "items": [
                            {
                                "type": "Image",
                                "margin-top": "5%",
                                "height": "300dp",
                                "width": "280dp",
                                "margin-left": "35dp",
                                "src": "https://duerstatic.bj.bcebos.com/dbp-image%2FDPLMaterial%2Fimage2019-6-24_19-12-54.png"
                            },
                            {
                                "type": "Container",
                                "padding-top": "5%",
                                "width": "65%",
                                "height": "100%",
                                "items": [
                                    {
                                        "type": "Text",
                                        "text": "陶器简介",
                                        "font-size": "25dp",
                                        "letter-specing": "30dp",
                                        "margin-left": "7%"
                                    },
                                    {
                                        "type": "Text",
                                        "text": "陶瓷是陶器和瓷器的总称。陶瓷是一种工艺美术，也是民俗文化。中国是世界上几个历史悠久的文明古国之一，对人类社会的进步与发展做出了许多重大贡献。在陶瓷技术与艺术上所取得的成就，尤其具有特殊重要意义。",
                                        "font-size": "25dp",
                                        "letter-specing": "30dp",
                                        "margin-top": "30dp",
                                        "margin-left": "7%"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "Footer",
                        "hints": [
                            "瓷器的历史"
                        ]
                    }
                ]
            }
        ]
    }
};

let letters_info = {
    letters: {
        'a': {
            name: 'a',
            desc: '[ei]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/a.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A56Z%2F-1%2F%2F2d3c4037f6f1604163123de2f12da055a8f3b058a36fe5f7b3d3abfa696d5d40',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/a.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T04%3A02%3A26Z%2F-1%2F%2Fcb8de5cc76df77f8ae1472a6463a915c9359f50983dcb19f13c5daabd2d509cb',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/a.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A59%3A40Z%2F-1%2F%2F5dad6159d7fe7b91f59a1eb5a18d407cd81ef836ab08e5559b6dd759ec00624d',
            hwImage: ''
        },
        'b': {
            name: 'b',
            desc: '[bi:]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/b.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A56Z%2F-1%2F%2Fce74a656d2428f4e3a4e5c0671f120ec337db979b7344c5fa9be0dc3372419cf',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/b.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A50%3A28Z%2F-1%2F%2Fffc4aefe98b0c0b20e6ee5f41a0f8653c5e99821df0787ad05fbfff6ca625ff0',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/b.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A19%3A50Z%2F-1%2F%2F5a7e269cfb639d1b8c2f7b93659da6b968eeda0224493e0feef545c3ec9f7da6',
            hwImage: ''
        },
        'c': {
            name: 'c',
            desc: '[si:]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/c.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A56Z%2F-1%2F%2F50091b69d813d913e74f107b49d04e998249a13a5bb53129bc3f8fe79294427b',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/c.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A50%3A28Z%2F-1%2F%2Fab0eb2d2d84bd54ee0c829c0926571fde53e6a28be9e0293c7a0e35fbe813d9e',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/c.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A19%3A50Z%2F-1%2F%2F814f47d947740cb4d0e331329d79607bd62113d3ee74662add8ea20791af27f5',
            hwImage: '',
        },
        'd': {
            name: 'd',
            desc: '[di:]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/d.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A56Z%2F-1%2F%2F66e1e7c8b066762627fa73671dc8ca2a8c81877a74ecb7b754f25c902134f801',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/d.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A50%3A28Z%2F-1%2F%2F84f1abb9655c7f97cc893a75c778c0968b6d5dd1c1f67bff752c4e4e0b8f3ad5',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/d.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A19%3A50Z%2F-1%2F%2Fb53f136b607983edfca428ea35fa3b621e63bca7140709ac8760dc58f1c63e1a',
            hwImage: '',
        },
        'e': {
            name: 'e',
            desc: '[i:]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/e.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A56Z%2F-1%2F%2F90fc93485b5c5452eb2fa28a52b0c5cb0f5b8bfff746037295cc92df9c8d3c18',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/d.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A50%3A28Z%2F-1%2F%2F84f1abb9655c7f97cc893a75c778c0968b6d5dd1c1f67bff752c4e4e0b8f3ad5',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/e.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A19%3A50Z%2F-1%2F%2F8a422fddcd3d4ab60f7753ddd30b534102f84c9de371a5bee7079d64bebd17f8',
            hwImage: '',
        },
        'f': {
            name: 'f',
            desc: '[ef]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/f.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A57Z%2F-1%2F%2F9c43500e76ad3385c81f5b1176f24f1d2a2e10565dbc45514b659390ba35563d',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/f.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A50%3A28Z%2F-1%2F%2Ff47b433f81fb78b264c218fce4c15ba55c9d8f19a253b4c5976ef19ca2028d62',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/f.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A19%3A50Z%2F-1%2F%2F61cc37a6bc12688977f5708444a76bd0b1bc817e7b6c601ddfd6d4b34cf562ad',
            hwImage: '',
        },
        'g': {
            name: 'g',
            desc: '[dʒi:]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/g.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A57Z%2F-1%2F%2F7a7a7943e69950e4f8efd3a460c785655c6ace59eb51df8c731c30be52e56212',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/g.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A50%3A28Z%2F-1%2F%2F5410c6224b2f4b3de085c8db407d8798676e590b21c1d89e058a0b9b65aa64c7',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/g.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A19%3A51Z%2F-1%2F%2F6fc94882850be3df635ab2454d68250d4849c0ed751652d8d728438930aa7172',
            hwImage: '',
        },
        'h': {
            name: 'h',
            desc: '[eit∫]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/h.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A57Z%2F-1%2F%2Fe064d6b9e032d7ced40ad6e56836b16b100894f0b552b397b6fce4219701ca0e',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/h.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A58%3A05Z%2F-1%2F%2Fe655a766b99bf5b1df278e047bb8d8225e0292c384f261d9615fb35fd077004e',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/h.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A21%3A33Z%2F-1%2F%2F4b6486074ddad8497f9ca717919d90d825967b9886f20a4c474be8093b2445d1',
            hwImage: '',
        },
        'i': {
            name: 'i',
            desc: '[ai]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/i.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A57Z%2F-1%2F%2F269e520f2891f3b9f1ce7b70032d5c8ebf23deb35fb2ce388f4cbe1e88be7a67',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/i.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A58%3A05Z%2F-1%2F%2F4addf6037cdff69dd192cab5d7191109d0266153e8c72d4e2e0b7eaf7d369054',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/i.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A21%3A33Z%2F-1%2F%2Fceaf385808a0d3c7f824df5fb636e4af9fb82c0a1bc546676f2708f0baec3493',
            hwImage: '',
        },
        'j': {
            name: 'j',
            desc: '[dʒei]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/j.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A57Z%2F-1%2F%2F2a63c8b4b15ce8f606e0584bddad9bfba5dc3fe984de18c8ba7f54bb729e09af',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/j.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A58%3A05Z%2F-1%2F%2Fa989cd72afd675d805f0f3559fb233d0586fe36369371e7134d1da5b4b269f99',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/j.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A21%3A33Z%2F-1%2F%2F1d8b43766bed547e00649d08f1db270e4891e1e081303b8712c7174532571f90',
            hwImage: '',
        },
        'k': {
            name: 'k',
            desc: '[kei]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/k.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A57Z%2F-1%2F%2F8a14051fe1c266c933a2a87bc741d9095451a552e7475df7350606e57469711c',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/k.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A58%3A06Z%2F-1%2F%2F6e9ce62de2c2e86725d7c2f57a4de4b3b1629de03b9f3fe768b2db4d5c6276bc',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/k.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A21%3A34Z%2F-1%2F%2F14ad7b58f3b35e5a90ce9de52793080a185065c98b6d8e0184550c276576f0d5',
            hwImage: '',
        },
        'l': {
            name: 'l',
            desc: '[el]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/l.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A57Z%2F-1%2F%2F39a26e8984a89bafb709bed9913763365d37fb6a6ab2006fe8cf25e4ef36bec5',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/l.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A58%3A06Z%2F-1%2F%2F7a2ab47e0e1a4244074a455073381106e17a62a560295e1228d83d16ea87bab4',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/l.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A21%3A33Z%2F-1%2F%2Fcc767b97bd9de1bd95af8336a7b8e78e67c4b9a4d668779c077155f81158e6d8',
            hwImage: '',
        },
        'm': {
            name: 'm',
            desc: '[em]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/m.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A57Z%2F-1%2F%2Fb74ce86bdc4c59b4512f62db429ecf2814eee34168bc3a4fd2e7740fca3a6ab1',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/m.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A58%3A06Z%2F-1%2F%2Fe7f44749c363f92e7264acf15298a2d80eee641a324597889eadf927617ee967',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/m.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A21%3A33Z%2F-1%2F%2Fea5a20bddda376f247bda09e04115f49419b676916b143cc86bc7a50c1600925',
            hwImage: '',
        },
        'n': {
            name: 'n',
            desc: '[en]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/n.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A57Z%2F-1%2F%2Fe0d85e186a1ba58a9c087a355856f0c971b0610b23d1e18472b232087ef56197',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/n.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T08%3A58%3A06Z%2F-1%2F%2F630604f63f7b33a6ee9b85729ca185590bffd6708a2d283e03f13e1631d7ad91',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/n.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A21%3A34Z%2F-1%2F%2F36615ae72b94392d35156622738a84854a3798eb0ae6fb7702b449a4074da79d',
            hwImage: '',
        },
        'o': {
            name: 'o',
            desc: '[əu]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/o.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A58Z%2F-1%2F%2F61c6d3299223ea6ab37b21cd65aebe8f8b15cd663a228f823961a34d1ccb0a64',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/o.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A00%3A33Z%2F-1%2F%2F7b5db66e54824cee6631d67b0c2940ddd3b9241b30c6e899660c93f29bae2fb3',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/o.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A23%3A23Z%2F-1%2F%2F6585e0407b6961d6b730468e3530296a7d0a2fe8fbefbc9ef3bb6180898d74aa',
            hwImage: '',
        },
        'p': {
            name: 'p',
            desc: '[pi:]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/p.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A58Z%2F-1%2F%2F7c677d50caac88263caf8a66de711283c3a2b67c064faa40ed97b27f4500361e',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/p.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A00%3A33Z%2F-1%2F%2Fd1bf365409ce77441a420e2324cf4b43e22da519391c34ff00cd0837b2a37772',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/p.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A23%3A23Z%2F-1%2F%2Fd7944d1576c0c7b05ff8aac3119e84fedf68f0b7bdd74143649aa2e81c9e189c',
            hwImage: '',
        },
        'q': {
            name: 'q',
            desc: '[kju:]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/q.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A58Z%2F-1%2F%2Fdba07e4820ac931b9f8a7a8ba11ee542d21a221598c6b9d9dd5f6c8ad313a144',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/q.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A00%3A33Z%2F-1%2F%2Ffcd2a78c022c2c810dcd7d0764653e8846007fae7f9fadbf4c103a982cdee63c',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/q.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A23%3A23Z%2F-1%2F%2F4f7d1e6a4a6703d3cf2d1a867b806c0b06acc988656b66736a55956b15b81f25',
            hwImage: '',
        },
        'r': {
            name: 'r',
            desc: '[ɑ:]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/r.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A58Z%2F-1%2F%2Fecdbecc0a74b0414c6f34a50951f5f530ac30a6e2dffceeef4ac3d2062b1ba6a',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/r.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A00%3A33Z%2F-1%2F%2Fd4d6d96641c501465e1426edac2803c15056b8b60b8ac358bc720eaf941988be',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/r.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A23%3A24Z%2F-1%2F%2Fd595b0b3bba7910b5fddf5989735601e4a9092880a01fb824fd29d2b6287a016',
            hwImage: '',
        },
        's': {
            name: 's',
            desc: '[es]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/s.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A58Z%2F-1%2F%2F342493d2430709ba85e957e8b4032b6ffd92731c7009dd505af380ad7636c99e',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/s.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A00%3A33Z%2F-1%2F%2F79b650f88e733634276d30716af51ff140c8ce259952e01325f349a1a993322c',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/s.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A23%3A24Z%2F-1%2F%2Fa50738455827e3e157313d49e5c7ee01362468f69f14a869df4586181a152797',
            hwImage: '',
        },
        't': {
            name: 't',
            desc: '[ti:]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/t.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A58Z%2F-1%2F%2F65745bf3f810c73cd4228a437466df194913df4d15594f81465bf304bf9bdfa0',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/t.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A00%3A33Z%2F-1%2F%2Ffc30b9b2a67f230b4592415ac222b3f2cec7350dd8d4dc967faa193e30d8fbc9',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/t.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A23%3A24Z%2F-1%2F%2F434fbb638e3509a604979431eaffc23ffc194a96c01c226fa54319e00bbed2a7',
            hwImage: '',
        },
        'u': {
            name: 'u',
            desc: '[ju:]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/u.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A58Z%2F-1%2F%2F7d709f61a83058a981d1e84cef707619197efa421198394342c374b46bbde4cd',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/v.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A02%3A31Z%2F-1%2F%2Fbab6959239c5ebbec1b79005c4b6d0448890292d4a5db8c4c4caefc047803b5c',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/u.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A24%3A47Z%2F-1%2F%2F47aeb7a00fbb7676a0b4fcd6067fec6546e5895f64eb341d48facf3b2bc41968',
            hwImage: '',
        },
        'v': {
            name: 'v',
            desc: '[vi:] ',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/v.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A58Z%2F-1%2F%2Ff980df57ad446d387eb4ea8ae57c9b92290b4a4df4ea61e45059ed451e4abf5c',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/v.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A02%3A31Z%2F-1%2F%2Fbab6959239c5ebbec1b79005c4b6d0448890292d4a5db8c4c4caefc047803b5c',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/v.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A24%3A47Z%2F-1%2F%2F8a4159da621025ddaa31315a689bad7877ef38392311318489e6b82dc4699bbb',
            hwImage: '',
        },
        'w': {
            name: 'w',
            desc: '[′d∧blju:]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/w.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A58Z%2F-1%2F%2F1c5c279934bef49ee0e458b78a8bc887a4d52fbdc1c3ae8befa9e79df09756f2',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/w.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A02%3A31Z%2F-1%2F%2F8278e3ee6991163770d76aee732fc4eed36fa3a72e9eb89eb17ec636fdc928b2',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/w.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A24%3A47Z%2F-1%2F%2Fa7bbf074dec6cf6296fa8c0163d42934b335efcded2fd1830de55779ccaef717',
            hwImage: '',
        },
        'x': {
            name: 'x',
            desc: '[eks]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/x.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A59Z%2F-1%2F%2F4ebf83133935cda75837fc889973f749a0a6049f0a2f0f0851debd79cbe4cc7a',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/x.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A02%3A31Z%2F-1%2F%2Fbca60f45a45b57f36df2a827d76ce50157fc290222334b7e7c339ace1f1f021c',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/x.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A24%3A48Z%2F-1%2F%2Fa23d9bf62c1bdf8e03f2d1ee51cf808c5aa205a46d78e654195715753f8fc657',
            hwImage: '',
        },
        'y': {
            name: 'y',
            desc: '[wai]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/y.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A59Z%2F-1%2F%2F905d641a43640159f5503fae1a807462a436c9dd748b1293269a316626be69b1',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/y.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A02%3A31Z%2F-1%2F%2F6150c3c3d91547986e0324d98695b0867a0c0291d4fa93a9e5ad6d36c6cbdca7',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/y.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A24%3A48Z%2F-1%2F%2F3f5cd92b7e00445c33db3bfba620cbde9ecb84f5bdbdf749e0ca80850661b21b',
            hwImage: '',
        },
        'z': {
            name: 'z',
            desc: '[zi:][zed]',
            image: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/z.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T02%3A54%3A59Z%2F-1%2F%2Fbda21c6236d8916b7cc72450129152478690bfceec33805234863f16a03d531c',
            sound: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/z.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T09%3A02%3A31Z%2F-1%2F%2Fd1be5d820c9b2db3b42d57d966170e671327b281fe0b9f013544c5be23a1dfad',
            homeImage: 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/z.gif?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T10%3A24%3A48Z%2F-1%2F%2Fab5e1389707931a7c3b36f3547a55f05091e6499f5ab8694fb400803beb9ad87',
            hwImage: '',
        }
    }
};

const DataProvider = require('./DataProvider');
/**
  * @class DataProvider abstract class,
  *         define the interface to provider data
  */
class StaticDataProvider extends DataProvider {
    constructor() {
        super();
        this.endSessionSpeech = new Array("记得明天再来哦",
                                          "谢谢使用，下次再见",
                                          "欢迎使用英文字母发音",
                                          "英文字母发音等你再来");
    }

    /**
      * return the url of the home page background image
      */
    getHomeBackgroundImage() {
        return 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/home_card_bg.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-17T10%3A06%3A37Z%2F-1%2F%2F7f471b0be97cdcb797d9d3353db1fcf2a1ad421f88cff2ae2a9a830b225aebbd';
    }

    getEndSessionSpeech() {
        return this.endSessionSpeech[Math.floor(Math.random()*this.endSessionSpeech.length)];
    }

	getLetterPlayCard() {
		//console.log("**********",letter_play_card);
		return letter_play_card;
	}

	getLetterPlayCardBackgroundImage() {
		return "http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/play_card_bg2.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T03%3A36%3A29Z%2F-1%2F%2F65399e91c1c3c52ca2d140da939387b2c212bb6b4335079a4df9338cd5274a75";
	}

    getletterDefaultSoundURL() {
        return 'http://dbp-resource.gz.bcebos.com/834af39d-887e-2727-5599-ce907529a66a/a.wav?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2019-08-18T04%3A02%3A26Z%2F-1%2F%2Fcb8de5cc76df77f8ae1472a6463a915c9359f50983dcb19f13c5daabd2d509cb';
    }

    getLetterInfo(letter) {
        return letters_info.letters[letter];
    }
}

module.exports = StaticDataProvider;
