require('dotenv').config();
const app = require('express')();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require('./controllers/router');
const cors = require('cors');
const compression = require('compression');
const { errorHandler } = require('./middleware/error.handler');
// Swagger API documentation
// use NODE_ENV=dev to access at /api-doc
// https://www.npmjs.com/package/swagger-ui-express
const swaggerUi = require('swagger-ui-express');
const swStats = require('swagger-stats');
const swaggerDocument = require('../swagger/swagger.json');
// Express middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

if (!['dev', 'staging'].includes(process.env.NODE_ENV)) app.use(compression());

app.use('/api', router);

if (['dev', 'staging'].includes(process.env.NODE_ENV)) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(swStats.getMiddleware({ swaggerSpec: swaggerDocument }));
}

app.use(errorHandler);
module.exports = app;