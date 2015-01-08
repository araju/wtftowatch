var movieServices = angular.module('movieServices', ['ngResource']);
\\ ngResource provides interaction support w RESTful services via the $resource service
\\ factory is value recipe that can use services
moviecatServices.factory('Movie',['$resource',
	function($resource){
		return $resource('db/:movies.json',{}, {
			query: {method:'GET', params:{movies:'movies'}, isArray:true}
		});
	}]);

			
