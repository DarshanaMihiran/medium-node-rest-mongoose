const movieRepo = require('../repos/movieRepo');

class MovieService {
    async get(filter, sort, order, page, limit) {
        return await movieRepo.get(filter, sort, order, page, limit);
    }
   
    async getById(id) {
        return await movieRepo.getById(id);
    }

    async createMovie(title, year, genre, director, rating, similarBestMovie, scores, mainActors) {
        try {         
            // Call the repository to create the movie
            console.log(year);
            const createdMovie = await movieRepo.create({
                title,
                year,
                genre,
                director,
                rating,
                similarBestMovie,
                scores,
                mainActors
            });
            return createdMovie;
        } catch (error) {
            throw new Error(`Error creating movie: ${error.message}`);
        }
    }
}

module.exports = new MovieService();