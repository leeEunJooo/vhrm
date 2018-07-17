'use strict';

var express = require('express');
var serve = require('express-static');
var ejs = require('ejs');
var child_process = require('child_process');
var exec = child_process.exec;
var app = express();
var fs = require('fs');
var path = require('path');
var port = 3000;


app.set('port', 3000);
app.listen(port, function () {
	console.log('Example app listening on port 3000!');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.get('/', function (req, res) {
	res.render('index.html');
});