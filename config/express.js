var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var load = require('express-load');
var helmet = require('helmet');

module.exports = function(){
    var app = express();
    //Variável de ambiente
    app.set('port',3000);	


    //Middleware
    app.use(express.static('./public'));
    app.set('view engine','ejs');
    app.set('views','./app/views');	
    
       
    app.use(cookieParser());
    app.use(session(
            {secret: '1e829bcdad486502b56391c60a4492f19e360077',
             resave:true,
             saveUninitialized: true                
            }
    ));
    app.use(passport.initialize());
    app.use(passport.session());     
    app.use(helmet.frameguard());
    app.use(helmet.xssFilter());        
    app.use(helmet.noSniff());
    app.disable('x-powered-by');
    
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());


    load('models',{cwd: 'app'})
            .then('controllers')
            .then('routes')
            .into(app);
    app.get('*',function(req,res){
       res.status(404).render('404'); 
    });
    
    return app;
};