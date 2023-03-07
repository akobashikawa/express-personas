const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Personas API',
    description: 'API REST para Personas',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);