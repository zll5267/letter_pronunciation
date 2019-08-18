/**
 * @file entry file
 * @author zll
 */

const express = require('express');

const Bot = require('./src/Bot');
let app = express();

let debug = true;

// 探活请求
app.head('/', (req, res) => {
    console.log("heartbeat requst ......");
    res.sendStatus(204);
});

app.post('/', (req, res) => {
    req.rawBody = '';

    req.setEncoding('utf8');
    req.on('data', chunk => {
        req.rawBody += chunk;
    });

    req.on('end', () => {
        if (debug) {
            console.log("receive request begin =======================");
            console.log(req.rawBody);
            console.log("receive request end =======================");
        }
        let reqBody = JSON.parse(req.rawBody);
        let b = new Bot(reqBody);
        // 开启签名认证
        // 本地运行可以先注释
        // b.initCertificate(req.headers, req.rawBody).enableVerifyRequestSign();

        b.run().then(result => {
            if (debug) {
                console.log("send response begin =======================");
                console.log(result);
                console.log("send response end   =======================");
            }
            res.send(result);
        });
    });
}).listen(8016);

console.log('listen 8016');
