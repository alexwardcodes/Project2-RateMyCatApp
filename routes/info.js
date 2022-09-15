const express = require('express');

const methodOverride = require('method-override');


const router = express.Router();

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }));

const infoCntrl = require("../controllers/info");


// Routes
router.get("/info/about", infoCntrl.info_about_get);
router.get("/info/info", infoCntrl.info_info_get);
router.get("/info/disclaimer", infoCntrl.info_disclaimer_get);

module.exports = router;