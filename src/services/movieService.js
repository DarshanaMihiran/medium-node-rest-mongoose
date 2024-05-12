const movieRepo = require('../repos/movieRepo');

class MovieService {
    async getAllMovies(query) {
        return await movieRepo.getAllMovies(query);
    }

    // Add more service methods here for other business logic
}

module.exports = new MovieService();