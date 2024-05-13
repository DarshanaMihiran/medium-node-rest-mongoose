const express = require('express');
const movieController = require('../controllers/movieController');
const { validateDirectorQuery } = require('../middlewares/inputValidationMiddleware');

const router = express.Router();

// Define routes and use controller methods
/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: director
 *         schema:
 *           type: string
 *         description: Director of the movie
 *     responses:
 *       200:
 *         description: A list of movies
 */
router.get('/', validateDirectorQuery, movieController.get);

module.exports = router;
