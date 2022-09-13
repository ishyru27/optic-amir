require("./config");
require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
const routes = require("./src/routes");
app.use(routes);

// Swagger Docs
//const swaggerDocs = require("./swagger_config");
// Swagger User Interface
//const swaggerUi = require("swagger-ui-express");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger_config/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// Listen Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});