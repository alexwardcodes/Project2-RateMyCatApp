const express = require("express");

require("dotenv").config;

const flash = require("flash");

const mongoose = require("mongoose");

const PORT = process.env.PORT;

const app = express();

app.use(flash());

app._router.use(express.static("public"));

mongoose.connect(
  process.env.MongoDBURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB connected!!!");
  }
);

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`RateMyCat is running on port ${PORT}`);
});
