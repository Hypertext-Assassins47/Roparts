const express = require('express');
const router = express.Router();

const { create, productById, read, remove, update } = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth") // we need this authorization misslewares here so that onlu admin can make any category
const { userById } = require("../controllers/user") //anytime get id in the parameter than this middleware will run 

router.get('/product/:productId', read);
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove)
router.put('/product/:productId/:userId', requireSignin, isAuth, isAdmin, update)
router.param('userId', userById);
router.param('productId', productById);

module.exports = router;