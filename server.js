// silly chrome wants SSL to do screensharing
var fs = require('fs'),
    express = require('express'),
    https = require('https'),
    http = require('http');


var privateKey = fs.readFileSync('fakekeys/privatekey.pem').toString(),
    certificate = fs.readFileSync('fakekeys/certificate.pem').toString();


var app = express();

app.use(express.static(__dirname));

//var port = process.env.PORT || 8000;
var port1 = process.env.PORT || 8001;
//https.createServer({key: privateKey, cert: certificate}, app).listen(port);
http.createServer(app).listen(port1);

console.log('running on https://localhost:8000 and http://localhost:8001');
