angular.module('mean').factory('Contato',["$resource", function($resource){
	return $resource('/contatos/:id');
}]);