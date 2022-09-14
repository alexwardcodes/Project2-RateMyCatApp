const express = require('express');

const methodOverride = require('method-override');


const router = express.Router();

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }));

const catCntrl = require("../controllers/cats");


const multer = require('multer');
var storage = multer.diskStorage({    destination: function (req, file, cb) {      cb(null, './public/uploads/')    },
filename: function (req, file, cb) {      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)    }  })
var upload = multer({ storage: storage }) 


// IsLoggedIn middleware
const isLoggedIn = require('../helper/isLoggedIn');

// Routes
router.get("/cat/add", isLoggedIn, catCntrl.cat_create_get);
router.post("/cat/add", upload.single('image'), catCntrl.cat_create_post);
router.get("/cat/index", catCntrl.cat_index_get);
router.get("/cat/detail", catCntrl.cat_show_get);
router.post("/cat/detail", catCntrl.cat_show_post);
router.get("/cat/delete", catCntrl.cat_delete_get);
router.get("/cat/edit", catCntrl.cat_edit_get);
router.put("/cat/update", catCntrl.cat_update_put);



module.exports = router;