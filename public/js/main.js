angular.module('mean',['ngResource','ngRoute'])
	.config(function($routeProvider,$locationProvider){
		 $locationProvider.hashPrefix('');
		
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
	});