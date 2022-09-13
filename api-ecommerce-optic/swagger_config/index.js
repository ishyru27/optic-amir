const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API Account Bonification",
      description: "Service that obtains bonification from an account.",
      contact: {
        name: "Luis Carvajal / Mariano Drets",
        email: "luis.carvajal@weplan-latam.com/ maria@gmail.com"
      },
       servers: [
        "http://localhost:8000"
      ]
    }
  },
 apis: ["./api/bonification/*.route.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;