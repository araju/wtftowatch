var movieServices=angular.module('movieServices',['ngResource']);

movieServices.factory('Movie', ['$resource',
  function($resource){
    return $resource('movies/movies.json', {}, {
      query: {method: 'GET', params:{movieId:'movies'}, isArray:true}
    });
  }]);
