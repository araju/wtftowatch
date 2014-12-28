// i/o with db for movie info

//for now, the db will just be a huge object in this file.
// need to restart node server when we add more movies
// TODO: actually use a db
var fs = require('fs');
var jsonFile = 'db/movies.json';
var allMovies = {}; //TODO: put some default movie here
fs.readFile(jsonFile, 'utf8', function (err, data) {
    if (err) {
        throw err;
        console.log('Got an error while reading map file');
        return;
    }
    allMovies = JSON.parse(data);
});
//var movieCount = parseInt(allMovies.movieCount);

module.exports = {
    getRandomMovieInfo: function () {
        var randIdx = Math.floor(Math.random() * allMovies.movieCount);
        movieInfo = allMovies.movies[randIdx];
        return JSON.stringify(movieInfo);
    }
};