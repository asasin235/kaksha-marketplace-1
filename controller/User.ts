const {Request, Response} = require('express');
const{AddToCart} = require('../services/userServices');
import { IGetUserAuthInfoRequest } from "../definitonFile"

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