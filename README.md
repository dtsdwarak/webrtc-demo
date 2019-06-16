# WebRTC-Demo
Demo app for WEBRTC

![Travis CI](https://travis-ci.org/dtsdwarak/webrtc-demo.svg?branch=master)

## Demo
[WebRTC Demo](http://webrtc-rts.herokuapp.com)

## Serving the app
```bash
$ npm start
```
## Deploying
The app will be served at [localhost:8001](http://localhost:8001) under default settings when you run it locally. ```simplewebrtc.bundle.js``` has been configured to use my signalling server that runs at [Heroku](https://webrtc-signal-server.herokuapp.com). You are free to use this as it is or spin up your own signalling server and use it. If you plan to do the latter, you may want to look into [dtsdwarak/webrtc-signal](https://github.com/dtsdwarak/webrtc-signal).

Also, you can deploy the same code to Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/dtsdwarak/webrtc-demo/tree/master)
---
## Note

Since the singalling server I used has been configured to work over HTTP, I have forced HTTP throught JavaScript code. If you want to do this over SSL, remove the following JavaScript code at the end of the ```index.html```

```javascript
$(function(){
    if(window.location.protocol==="https:")
        window.location.protocol="http";
});
```
