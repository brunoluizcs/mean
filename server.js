var http = require('http');
var express = require('express');
var app = require('./config/express')();
require('./config/passport.js')();
require('./config/database.js')('mongodb://localhost/mean');

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server executando na porta: ' + app.get('port'));
});