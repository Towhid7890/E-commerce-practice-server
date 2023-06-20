const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const app = express();
app.use(express.json());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// client error handling
app.use((req, res, next) => {
  createError(404, "Not found");
  next();
});

module.exports = app;
