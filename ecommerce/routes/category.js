const express = require('express');
const router = express.Router();

const { create } = require("../controllers/category");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth") // we need this authorization misslewares here so that onlu admin can make any category
const { userById } = require("../controllers/user") //anytime get id in the parameter than this middleware will run 


router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);

router.param('userId', userById);

module.exports = router;