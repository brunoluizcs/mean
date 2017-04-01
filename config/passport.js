var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function(){
    console.log('Carregando modulo passport');
    var Usuario = mongoose.model('Usuario');
    
    passport.use(new GitHubStrategy({
        clientID : '3d1f139eda165d3c0d34',
        clientSecret : '1e829bcdad486502b56391c60a4492f19e360077',
        callBackURL: '/auth/github/callback'
        },
        function(accessToken, refreshToken,profile,done){            
            Usuario.findOrCreate(
                    { "login" : profile.username },
                    { "nome" : profile.displayName},
                    function(erro,usuario){
                        if (erro) {
                            console.log(erro);
                            return done(erro);
                        }
                        return done(null, usuario);                            
                    }
            );
        }));
        
        /*
        Chamado apenas UMA vez e recebe o usuário do nosso
        banco disponibilizado pelo callback da estratégia de
        autenticação. Realizará a serialização apenas do
        ObjectId do usuário na sessão.
        */        
       passport.serializeUser(function(usuario, done){
           done(null, usuario._id);
       });
       
       passport.deserializeUser(function(id,done){
            Usuario.findById(id).exec()
                .then(function(usuario){
                    done(null,usuario);
            });
       });
};

