const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Shopping Cart API',
      version: '1.0.0',
      description: 'API documentation for shopping cart',
    },
    servers: [
      {
        url: 'http://localhost:3000', // O'zingizning server manzilingiz
      },
    ],
  },
  // apis: ['./routes/all.route.js'],
  apis: ['./routes/cart.route.js'], // Sizning router faylingiz joylashgan yo'l
  // apis: ['./routes/auth.route.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
