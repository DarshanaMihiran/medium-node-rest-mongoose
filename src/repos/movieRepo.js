const Movie = require('../models/movieModel');

class MovieRepo {
    async getById(id) {
        return await Movie.find({_id : id}).populate("similarBestMovie");
    }

    async getAllMovies(query) {
        // await Movie.create({
        //     title: "Inception Dare",
        //     year: 2010,
        //     genre: ["Action", "Adventure", "Sci-Fi"],
        //     director: "Christopher Nolan",
        //     rating: 9.3,
        //     createdAt: "2024-05-12T08:00:00.000Z",
        //     updatedAt: "2024-05-12T08:00:00.000Z",
        //     similarBestMovie: "60a3b7393d4dcd001c8f4468",
        //     scores: {
        //     IMDb: 8.8,
        //     Metacritic: 74,
        //     RottenTomatoes: 87
        //     },
        //     mainActors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
        // })
        return await Movie.find(query).populate("similarBestMovie");
    }

    async get(filters, sort, order, page, limit) {
        const query = {};

        // Apply filters
        if (filters) {
            const filterArray = filters.split('&');
            filterArray.forEach(filter => {
                const [key, value] = filter.split('=');
                query[key] = value;
            });
        }

        // Apply sorting
        let sortQuery = {};
        if (sort) {
            sortQuery[sort] = order === 'desc' ? -1 : 1;
        }

        try {
            const movies = await Movie.find(query)
                .sort(sortQuery)
                .skip((page - 1) * limit)
                .limit(limit);
            return movies;
        } catch (error) {
            throw new Error('Failed to fetch movies');
        }
    }

    async create(movieData) {
        try {
            const movie = new Movie(movieData);
            await movie.save();
            return movie;
        } catch (error) {
            throw new Error(`Error creating movie: ${error.message}`);
        }
    }
}

module.exports = new MovieRepo();