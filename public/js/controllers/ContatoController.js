angular.module('mean').controller('ContatoController',
	function($scope, $routeParams,Contato){
		console.log($routeParams.contatoId);		
		
		if($routeParams.contatoId){
			Contato.get({id: $routeParams.contatoId},
				function(contato){
					$scope.contato = contato;
				},
				function(erro){
					$scope.mensagem = {
						texto : 'Não foi possível obter o contato.'
					}
					console.log(erro);
				}			
			);
		}else{
			$scope.contato = new Contato();		
		}

		$scope.salva = function(){
			$scope.contato.$save().
				then(function(){
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.contato = new Contato();
				})				
				.catch(function(){
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				})
		}		
	}
);