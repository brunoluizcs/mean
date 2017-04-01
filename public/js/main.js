angular.module('mean',['ngResource','ngRoute'])
	.config(function($routeProvider,$locationProvider, $httpProvider){
                $locationProvider.hashPrefix('');
		$httpProvider.interceptors.push('meuInterceptor');
                
		$routeProvider.otherwise({redirectTo: '/contatos'});
		
		$routeProvider.when('/contatos',{
			templateUrl: 'partials/contatos.html' ,
			controller: 'ContatosController'			
		});
		
		$routeProvider.when('/contato/:contatoId',{
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController'			
		});
		
		$routeProvider.when('/contato',{
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController'			
		});
                $routeProvider.when('/auth',{
                    templateUrl: 'partials/auth.html',
                });
	});