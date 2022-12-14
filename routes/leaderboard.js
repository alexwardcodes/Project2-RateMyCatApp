const express = require('express');

const methodOverride = require('method-override');


const router = express.Router();

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }));

const leaderboardCntrl = require("../controllers/leaderboard");


// IsLoggedIn middleware
const IsLoggedIn = require('../helper/IsLoggedIn');

// Routes
router.get("/Leaderboard", leaderboardCntrl.leaderboard_show_get);

module.exports = router;