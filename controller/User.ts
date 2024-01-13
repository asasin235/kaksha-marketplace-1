const {Request, Response} = require('express');
const{AddToCart} = require('../services/userServices');

export const addToCart = async (req: Request, res: Response) => {
    try {
        const {productId, quantity, price, productName, productImage} = req.body;
        const {userId} = req.userId;
        await AddToCart(userId, productId, quantity, price, productName, productImage);
        return res.status(200).json({message: 'Product added to cart successfully'});

    }catch (e) {
        console.log(e);
    }

}