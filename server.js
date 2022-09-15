const express = require("express");

require("dotenv").config();

const multer  = require("multer");

const flash = require("connect-flash");

const mongoose = require("mongoose");

const PORT = process.env.PORT;

const app = express();


app.use(flash());

app.use(express.static("public"));

const expressLayouts = require("express-ejs-layouts");

// Import routes here
// const authRouter = require('./routes/auth');
const indexRouter = require("./routes/index");
const catRouter = require("./routes/cats");
const userRouter = require("./routes/users");
const locationRouter = require("./routes/location");
const leaderboardRouter = require("./routes/leaderboard");
const authRouter = require("./routes/auth");
const infoRouter = require("./routes/info");

app.use(expressLayouts);

let session = require('express-session');
let passport = require('./helper/ppConfig');
const { request } = require("express");

app.use(session({
  secret: process.env.SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {maxAge: 3600000}
}))

// Initiialze passport and passport session
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  // res.locals.alerts = req.flash();
  next();
})

// Mount routes here
app.use("/", indexRouter);
app.use("/", catRouter);
app.use("/", userRouter);
app.use("/", locationRouter);
app.use("/", leaderboardRouter);
app.use("/", authRouter);
app.use("/", infoRouter);

app.set("view engine", "ejs");

mongoose.connect(
  process.env.MongoDBURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB connected!!!");
  }
);

app.listen(PORT, () => {
  console.log(`RateMyCat is running on port ${PORT}`);
});
