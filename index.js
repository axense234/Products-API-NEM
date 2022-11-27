// Important imports
const express = require("express");
require("express-async-errors");

// Swagger
const swaggerUI = require("swagger-ui-express");
const { swaggerDocs } = require("./utils/swagger");

// DOTENV and connecting to the DB
require("dotenv").config();
const connectDB = require("./db/connect");
const { version } = require("./package-lock.json");

// App and Port
const app = express();
const PORT = process.env.PORT || 4000;

// Routes and middleware imports
const errorHandlerMiddleware = require("./middleware/errorHandler");
const productsRoute = require("./routers/products");

// Json Parsing by Express
app.use(express.json());
app.use(express.raw());

// Routes and middleware
app.use("/products/", [productsRoute]);
app.use(errorHandlerMiddleware);
app.use(`/api/${version}/docs`, swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Default Page
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Home Page" });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, async () => {
      console.log(`App is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
