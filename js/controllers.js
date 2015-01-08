var moviecatControllers = angular.module('moviecatControllers', []);

moviecatControllers.controller('MovieDetailCtrl',['$scope','$routeParams','Movie',
	function($scope, $routeParams, Phone) {
		
	}]);
	
moviecatControllers.controller('PhoneListCtrl', ['$scope','Movie',
	function($scope, Movie) {
		$scope.movies = Movie.query();
		$scope.image= 'Image';
		$scope.title = 'Title';
		$scope.description = 'Description';
	}]};
	