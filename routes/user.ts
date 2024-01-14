const express = require('express');
const UserRouter = express.Router();

const {clearCart,addToCart} = require('../controller/user');


UserRouter.route('/add-to-cart').post(addToCart);
UserRouter.route('/clear-cart').post(clearCart);
export default UserRouter;