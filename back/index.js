const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("http");
const cors = require("cors");
const indexRouter = require("./routes");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("server listen on 3001");
});