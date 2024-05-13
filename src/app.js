const express = require('express');
const app = express();
const { connectDatabase } = require('./config/database.config');
const routes = require('./config/route.config');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger.config'); 
const errorHandler = require('./middlewares/exceptionMiddleware');
const { insertInitialData } = require('./utils/seedData')

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use(routes);
app.use(errorHandler);

const environment = process.env.NODE_ENV || 'development';
console.log('env: ' + process.env.NODE_ENV);
require('dotenv').config({ path: `./env/env.${environment}` });

//Start server and connect to database
connectDatabase(process.env.DB_URL, JSON.parse(process.env.DB_OPTIONS))
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        insertInitialData();
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });