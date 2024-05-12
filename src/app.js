const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/movieModel');

const app = express();
const db = mongoose.connect('mongodb://127.0.0.1:27017/entertainment?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5');
const port = process.env.PORT || 3000;
const movieRouter = express.Router();

movieRouter.route('/movies')
    .get(async (req, res) => {
        // Movie.find((err, books) => {
        //     if(err){
        //         console.log(err);
        //         return res.send(err);
        //     }
        //     console.log(books);
        //     return res.send(books);
        // });
        try {
            const query = {};
            if(req.query.director){
                req.query = req.query.director;
            }
            const movies = await Movie.find(req.query.director);
            return res.json(movies);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    });

app.use('/api', movieRouter);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})