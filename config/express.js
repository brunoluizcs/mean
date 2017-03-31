var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');

module.exports = function(){
	var app = express();
	//Variável de ambiente
	app.set('port',3000);	


	//Middleware
	app.use(express.static('./public'));
	app.set('view engine','ejs');
	app.set('views','./app/views');	
	
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	
	
	load('models',{cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);
	
	return app;
};