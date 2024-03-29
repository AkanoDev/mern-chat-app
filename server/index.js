const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

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
