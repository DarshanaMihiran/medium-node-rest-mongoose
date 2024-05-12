const Movie = require('../models/movieModel');

class MovieRepo {
    async getAllMovies(query) {
        return await Movie.find(query).populate("similarBestMovie");
    }

    // Add more repository methods here for other database operations
}

module.exports = new MovieRepo();