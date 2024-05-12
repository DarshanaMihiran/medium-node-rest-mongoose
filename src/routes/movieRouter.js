const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

// Define routes and use controller methods
/**
 * @swagger
 * /api/movies:
 *   get:
 *     description: Returns all movies
 *     responses:
 *       200:
 *         description: A list of movies
 */
router.get('/', movieController.get);

module.exports = router;
