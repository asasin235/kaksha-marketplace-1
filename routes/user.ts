const express = require('express');
const UserRouter = express.Router();

const {addToCart} = require('../controller/user');

UserRouter.route('/add-to-cart').post(addToCart);

export default UserRouter;