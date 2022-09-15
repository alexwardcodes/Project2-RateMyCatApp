const {Cat} = require("../models/Cat");
// Require Moment Library
const moment = require('moment');

exports.leaderboard_show_get = (req, res) => {
    Cat.find().populate('user')
    .then(cats => {
        res.render("Leaderboard/leaderboard", {cats, moment}) // Cats: Cats, moment: moment
    })
    .catch(err => {
        console.log(err);
    })
}