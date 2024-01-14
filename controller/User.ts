const {Request, Response} = require('express');
const{clearUserCart,AddToCart} = require('../services/userServices');

import { IGetUserAuthInfoRequest } from "../definitonFile"
import { Request, Response } from 'express';

export const addToCart = async (req: IGetUserAuthInfoRequest, res: Response) => {
    try {
        const {productId, quantity, price, productName, productImage} = req.body[0];
        const userId = req.userId;
        await AddToCart(userId, productId, quantity, price, productName, productImage);
        return res.json();

    }catch (e) {
        console.log(e);
    }

}

export const clearCart = async (req: Request, res: Response) => {
    const { user_id } = req.params;

    try {
        await clearUserCart(user_id);
        return res.json({ message: 'Cart cleared successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
