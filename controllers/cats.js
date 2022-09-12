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
exports.cat_create_get = (req, res) => {
    // res.render("Cat/add");
    User.find()
    .then((users) => {
        res.render("cat/add", {users})
    })
    .catch((err) => {
        console.log(err);
    })
}

// HTTP POST - Cat
exports.cat_create_post = (req, res) => {

    // Saving the data into the Database

    let cat = new Cat(req.body);

    cat.save()
    .then(() => {


        // M2MR
        req.body.user.forEach(user => {
            User.findById(user, (error, user) => {
                user.cat.push(cat);
                user.save();
            })
        });
        res.redirect("/cat/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later; or contact admin for help.");
    })
}


// HTTP GET - Cat Index API
exports.cat_index_get = (req, res) => {
    Cat.find().populate('user')
    .then(cats => {
        res.render("cat/index", {cats: cats, moment}) // Cats: Cats, moment: moment
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Cat By Id
exports.cat_show_get = (req, res) => {
    console.log(req.query.id);

    // Find the Cat by ID
    Cat.findById(req.query.id).populate('user')
    .then(cat => {
        res.render("cat/detail", {cat, moment}) // Cat: Cat, moment: moment
    })
    .catch(err => {
        console.log(err)
    })
}


// HTTP DELETE - Cat
exports.cat_delete_get = (req, res) => {
    console.log(req.query.id);

    Cat.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/cat/index");
    })
    .catch(err => {
        console.log(err);
    })
}

// Edit API

// HTTP GET - Load Cat Edit Form
exports.cat_edit_get = (req, res) => {
    Cat.findById(req.query.id)
    .then((cat) => {
        res.render("cat/edit", {cat})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP PUT - Cat Update
exports.cat_update_put = (req, res) => {
    console.log(req.body.id);

    Cat.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/cat/index");
    })
    .catch(err => {
        console.log(err)
    })
};