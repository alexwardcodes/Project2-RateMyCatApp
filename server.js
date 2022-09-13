const express = require("express");

require("dotenv").config();

const multer  = require('multer');

const flash = require("connect-flash");

const mongoose = require("mongoose");

const PORT = process.env.PORT;

const app = express();

const upload = multer({ dest: './public/data/uploads/' })
app.post('/stats', upload.single('uploaded_file'), function (req, res) {
   console.log(req.file, req.body)
});

//image upload with multer

    app.post('/profile', upload.single('avatar'), function (req, res, next) {
    //   // req.file is the `avatar` file
    //   // req.body will hold the text fields, if there were any
    })

    app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
      // req.files is array of `photos` files
      // req.body will contain the text fields, if there were any
    })

    const cpUpload = upload.fields([{ name: 'gallery', maxCount: 100 }])
    app.post('/cool-profile', cpUpload, function (req, res, next) {
      // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
      //
      // e.g.
      //  req.files['gallery'] -> Array
      //
      // req.body will contain the text fields, if there were any
    })


app.use(flash());

app.use(express.static("public"));

const expressLayouts = require("express-ejs-layouts");

// Import routes here
// const authRouter = require('./routes/auth');
const indexRouter = require("./routes/index");
const catRouter = require("./routes/cats");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");

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
app.use("/", userRouter);

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
