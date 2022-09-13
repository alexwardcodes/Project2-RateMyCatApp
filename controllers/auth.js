 const {User} = require("../models/User");

// let passport = require("../helper/ppConfig");

// const bcrypt = require("bcrypt");
// const salt = 10

// need to create a user to sign up
exports.auth_signup_get = (req, res) => {
    res.render("auth/signup");
}

exports.auth_signup_post = (req, res) => {
     let user = new User(req.body);

    console.log(req.body.password); 
//    let hash = bcrypt.hashSync(req.body.password, salt);
//    console.log(hash);
//    user.password = hash;
    user.save()
    .then(() => {
        res.redirect("/");
    })
    .catch((err) => {
       console.log(err);
         res.send("Please try again later.")
     })
 }


 exports.auth_signin_get = (req, res) => {
     res.render("auth/signin");
}

// exports.auth_signin_post = (req, res) => {
//     function (emailAddress, password, done) {
//         User.findOne({ emailAddress: emailAddress }, function (err, user) {
//           if (err) { return done(err); }
//           if (!user) { return done(null, false); }
//           if (!user.verifyPassword(password)) { return done(null, false); }
//           return done(null, user);
//         });
//       }
// }

// exports.auth_logout_get = (req, res) => {
//     req.logout(function(err) {
//         if(err) {return next(err);}
//         req.flash("success", "You have been logged out successfully")
//         res.redirect("/auth/signin");
//     })
// }