angular.module('mean').controller('ContatosController',
	function($scope,Contato){
		$scope.contatos = [];
		$scope.total = 0;
		$scope.filtro = '';
		$scope.mensagem = {texto:''};		

		
		function buscaContatos(){
			Contato.query(
				function(contatos){
					$scope.contatos = contatos;
					$scope.mensagem = {};
				},
				function(erro){			
					$scope.mensagem = {texto : "Não foi possível obter a lista de contatos."};				
					console.log("Não foi possível obter a lista de contatos.");
					console.log(status + " " + statusText);		
				}
			);
		}
		buscaContatos();		
		
		$scope.remove = function(contato){
			var promise = Contato.delete({id: contato._id},
				buscaContatos,
				function(erro){
					$scope.mensagem = {texto : "Não foi possível remover o contato."};				
					console.log("Não foi possível remover o contato");
					console.log(erro);
				}
			);
		};		

		console.log("Total de contatos " + $scope.contatos.length);					
		$scope.incrementa = function(){
			$scope.total++;
		};
	}	
);