const express= require('express');

const methodOverride = require('method-override');

const router = express.Router();

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }));

const userCntrl = require("../controllers/users");

// IsLoggedIn middleware
const isLoggedIn = require('../helper/IsLoggedIn');

// Routes
router.get("/user/add", isLoggedIn, userCntrl.user_create_get);
router.post("/user/add", userCntrl.user_create_post);
router.get("/user/index", isLoggedIn, userCntrl.user_index_get);
router.get("/user/detail", userCntrl.user_show_get);
router.get("/user/delete", userCntrl.user_delete_get);
router.get("/user/edit", isLoggedIn, userCntrl.user_edit_get);
router.put("/user/update", userCntrl.user_update_put);

module.exports = router;