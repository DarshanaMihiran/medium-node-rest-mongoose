const express = require('express');
const app = express();
const { connectDatabase } = require('./config/database.config');
const config = require('./config/config');
const routes = require('./config/route.config');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger.config'); 
const errorHandler = require('./middlewares/exceptionMiddleware');

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use(routes);
app.use(errorHandler);
// Start server and connect to database
connectDatabase(config.dbURL, config.dbOptions)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });