// Require Models
const {User} = require("../models/User");
const {Cat} = require("../models/Cat");
// Require Moment Library
const moment = require('moment');

// APIs for Users

// CRUD
// Create
// HTTP GET - go to create User Page
exports.user_create_get = (req,res) => {
    res.render("user/add");
}

// HTTP POST - save user and take them to index
exports.user_create_post = (req, res) => {
    let user = new User(req.body);
    
    user.save()
    .then(() => {
        res.redirect("/user/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!!"); 
    })
}

// HTTP GET- User Index API
exports.user_index_get = (req, res) => {
    User.find().populate('cat')
    .then(users => {
        res.render("user/index", {users: users, moment}) 
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - User By Id
exports.user_show_get = (req, res) => {
    console.log(req.query.id);

    // Find the User by ID
    User.findById(req.query.id).populate('cat')
    .then(user => {
        res.render("user/detail", {user, moment}) 
    })
    .catch(err => {
        console.log(err)
    })
}

// HTTP DELETE - User
exports.user_delete_get = (req, res) => {
    console.log(req.query.id);

    User.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/user/index");
    })
    .catch(err => {
        console.log(err);
    })
}

// Edit API

// HTTP GET - Load USER Edit Form
exports.user_edit_get = (req, res) => {
    User.findById(req.query.id)
    .then((user) => {
        res.render("user/edit", {user})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP PUT - USER Update
exports.user_update_put = (req, res) => {
    console.log(req.body.id);

    User.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/user/index");
    })
    .catch(err => {
        console.log(err)
    })
}

