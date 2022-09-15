// Require Models
const {Cat} = require("../models/Cat");
const {Location} = require("../models/Location");
const {User} = require("../models/User");

// Require Moment Library
const moment = require('moment');

// APIs for Locations

// CRUD

// CREATE
// HTTP GET - Load Location From
exports.location_create_get = (req, res) => {
    res.render("location/add");
}

// HTTP POST - Location
exports.location_create_post = (req, res) => {
    // console.log(req.body);
    // res.send("POST WORKS!!!!");

    // Saving the data into the Database

    let location = new Location(req.body);

    location.save()
    .then(() => {
        res.redirect("/location/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!!");
    })
}


// HTTP GET - Location Index API
exports.location_index_get = (req, res) => {
    User.find().populate('cat')
    .then(users => {
        res.render("location/index", {users: users, moment}, {cat: cat, moment}) // locations: locations, moment: moment
    })
    .catch(err => {
        console.log(err);
    });

    
}

// HTTP GET - Location By Id
exports.location_show_get = (req, res) => {
    console.log(req.query.id);

    // Find the location by ID
    Location.findById(req.query.id).populate('cat')
    .then(location => {
        res.render("location/detail", {location, moment}) // location: location, moment: moment
    })
    .catch(err => {
        console.log(err)
    })
}