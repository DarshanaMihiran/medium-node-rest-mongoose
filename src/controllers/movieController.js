const movieService = require('../services/movieService');

class MovieController {
    async get(req, res, next) {
        const query = {};
        if (req.query.director) {
            query.director = req.query.director;
        }
        const movies = await movieService.getAllMovies(query);
        return res.json(movies);
    }

    // Add more controller methods here for other operations
}

module.exports = new MovieController();