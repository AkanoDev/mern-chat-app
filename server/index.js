const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello here");
});

const port = process.env.PORT || 5000;
const DATABASE = process.env.DATABASE_URI;

app.listen(port, (req, res) => {
  console.log(`Running on port: ${port}`);
});

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DATABASE SUCCESSFULLY CONNECTED"))
  .catch((err) => {
    console.log("DATABASE CONNECTION FAILED", err.message);
  });

module.exports = app;
