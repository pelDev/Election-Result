const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middlewares/error");
const db = require("./models");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cookieParser());
app.set("view engine", "ejs");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

db.sequelize.sync();

// Index Page
app.get("/", (_, res) => {
  res.render("pages/index");
});

const pollingResults = require("./routes/pollingResults");
const lgaResults = require("./routes/lgaResults");
const addResult = require("./routes/addResult");
app.use("/polling-results", pollingResults);
app.use("/lga-results", lgaResults);
app.use("/add-result", addResult);

app.use(errorHandler);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  server.close(() => process.exit(1));
});
