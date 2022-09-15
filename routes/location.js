const express= require('express');

const methodOverride = require('method-override');

const router = express.Router();

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }));

const locationCntrl = require("../controllers/location");

// IsLoggedIn middleware
const IsLoggedIn = require('../helper/isLoggedIn');

// Routes
router.get("/location/index", locationCntrl.location_index_get);

module.exports = router;


// List of counties in location drop down if we need them for some reason:

// Bath and North East Somerset
// Bedfordshire
// Berkshire
// Bristol
// Buckinghamshire
// Cambridgeshire
// Cheshire
// Cornwall
// County Durham
// Cumbria
// Derbyshire
// Devon
// Dorset
// East Riding of Yorkshire
// East Sussex
// Essex
// GloucestGloucestershire
// Greater London
// Greater Manchester
// Hampshire
// Herefordshire
// Hertfordshire
// Isle of Wight
// Isles of Scilly
// Kent
// Lancashire
// Leicestershire
// Lincolnshire
// Merseyside
// Norfolk
// North Somerset
// North Yorkshire
// Northamptonshire
// Northumberland
// Nottinghamshire
// Oxfordshire
// Rutland
// Shropshire
// Somerset
// South Gloucestershire
// South Yorkshire
// Staffordshire
// Suffolk
// Surrey
// Tyne & Wear
// Warwickshire
// West Midlands
// West Sussex
// West Yorkshire
// Wiltshire
// Worcestershire