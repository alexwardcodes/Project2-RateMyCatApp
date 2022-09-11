const express = require("express");

require("dotenv").config();

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

// app.use(express.static("public"));
app.use(expressLayouts);

// let session = require('express-session');
// let passport = require('./helper/ppConfig');

// app.use(session({
//   secret: process.env.SECRET,
//   saveUninitialized: true,
//   resave: false,
//   cookie: {maxAge: 3600000}
// }))

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(function(req, res, next) {
//   res.locals.currentUser = req.user;
//   res.locals.alerts = req.flash();
//   next();
// })

// Mount routes here
// app.use("/", authRouter);
app.use("/", indexRouter);
app.use("/", catRouter);

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
