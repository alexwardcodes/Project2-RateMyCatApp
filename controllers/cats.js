// Require Models
const {Cat} = require("../models/Cat");
const {User} = require("../models/User");
// const Cat = require("../models/Cat").Cat;

// Require Moment Library
const moment = require('moment');

// APIs for Cats

// CRUD

// CREATE
// HTTP GET - Load Cat From
exports.Cat_create_get = (req, res) => {
    // res.render("Cat/add");
    User.find()
    .then((Users) => {
        res.render("Cat/add", {Users})
    })
    .catch((err) => {
        console.log(err);
    })
}

// HTTP POST - Cat
exports.Cat_create_post = (req, res) => {

    // Saving the data into the Database

    let Cat = new Cat(req.body);

    Cat.save()
    .then(() => {


        // M2MR
        req.body.User.forEach(User => {
            User.findById(User, (error, User) => {
                User.Cat.push(Cat);
                User.save();
            })
        });
        res.redirect("/Cat/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later; or contact admin for help.");
    })
}


// HTTP GET - Cat Index API
exports.Cat_index_get = (req, res) => {
    Cat.find().populate('User')
    .then(Cats => {
        res.render("Cat/index", {Cats: Cats, moment}) // Cats: Cats, moment: moment
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Cat By Id
exports.Cat_show_get = (req, res) => {
    console.log(req.query.id);

    // Find the Cat by ID
    Cat.findById(req.query.id).populate('User')
    .then(Cat => {
        res.render("Cat/detail", {Cat, moment}) // Cat: Cat, moment: moment
    })
    .catch(err => {
        console.log(err)
    })
}


// HTTP DELETE - Cat
exports.Cat_delete_get = (req, res) => {
    console.log(req.query.id);

    Cat.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/Cat/index");
    })
    .catch(err => {
        console.log(err);
    })
}

// Edit API

// HTTP GET - Load Cat Edit Form
exports.Cat_edit_get = (req, res) => {
    Cat.findById(req.query.id)
    .then((Cat) => {
        res.render("Cat/edit", {Cat})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP PUT - Cat Update
exports.Cat_update_put = (req, res) => {
    console.log(req.body.id);

    Cat.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/Cat/index");
    })
    .catch(err => {
        console.log(err)
    })
};