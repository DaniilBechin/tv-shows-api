const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TV Shows API',
      version: '1.0.0',
      description: 'REST API для управления каталогом телешоу',
    },
    servers: [
      { url: 'http://localhost:3000' }
    ],
  },
  apis: ['./routes/*.js'],
};

module.exports = swaggerJsdoc(options);