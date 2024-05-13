function validateDirectorQuery(req, res, next) {
    if (!req.query.director || typeof req.query.director !== 'string') {
        return res.status(400).json({ error: 'Invalid director query' });
    }
    next(); // Proceed to the next middleware
}

module.exports = {
    validateDirectorQuery
};