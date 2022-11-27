const swaggerJsDocs = require("swagger-jsdoc");
const m2s = require("mongoose-to-swagger");
const { version } = require("../package.json");
const Product = require("../models/Product");

const m2sOptions = {
  omitFields: ["_id", "createdAt", "updatedAt", "originalPrice"],
};

const swaggerProductSchema = m2s(Product, m2sOptions);

const swaggerOptions = {
  definition: {
    info: {
      title: "Products API Docs",
      description:
        "Documentation for the Products API Project(NODE-EXPRESS-MONGODB) with Swagger(swagger-jsdoc and swagger-ui-express).",
      contact: {
        name: "axense234",
        url: "https://github.com/axense234",
        email: "andreicomanescuonline@gmail.com",
      },
      version,
    },
    components: {
      schemas: {
        Product: swaggerProductSchema,
        Authorization: {
          properties: {
            username: {
              type: "string",
            },
            password: {
              type: "string",
            },
          },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
    securityDefinitions: {
      bearerAuth: {
        type: "apiKey",
        scheme: "bearer",
        in: "header",
        name: "Authorization",
      },
    },
    // Servers for development/production
    servers: [
      "http://localhost:4000",
      "https://blogfree-server-ca.onrender.com",
    ],
  },
  apis: ["./docs/*.yaml"],
};

const swaggerDocs = swaggerJsDocs(swaggerOptions);

module.exports = { swaggerDocs };
