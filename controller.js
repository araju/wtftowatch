var phonecatControllers = angular.module('movieControllers', []);

...

moviecatControllers.controller('MovieListCtrl', ['$scope', 'Movie', function($scope, Movie) {
  $scope.movies = Movie.query();
}]);

moviecatControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams', 'Movie', function($scope, $routeParams, Movie) {
  $scope.movie = Movie.get({phoneId: $routeParams.movieId}, function(movie) {
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}]);
