'use strict';

var port = 5100;

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var sendMail = require('./src/router/sendMail');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/send-mail', sendMail);

app.listen(port,() => {
    console.log(`express app listen on port ${port}`);
});
