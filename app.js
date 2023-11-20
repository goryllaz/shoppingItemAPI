let createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const shoppingItemApiRouter = require("./routes/shoppingItemApi.js");
const testApiRouter = require("./routes/testApi");
const connect = require("./database/connect");

const app = express();
global.__basedir = __dirname;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));

connect();
const connection = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

try {
  connection.on("open", () => {
    console.log("MongoDB connected!");
  });
} catch (error) {
  console.error("MongoDB connection error: ", error);
}

app.use("/", indexRouter);
app.use("/shoppingItem", shoppingItemApiRouter);
app.use("/testApi", testApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
