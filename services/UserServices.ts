import client from "../config/redis";
import { Cart } from "../models/Cart";
const getRedisKey = (userId) => {
    return `cart:${userId}`;
}
export const AddToCart = async (userId, productId, quantity, price, productName, productImage) => {
   try {
       await client.connect();
         const key = getRedisKey(userId);


   }catch (e) {
       console.log(e);
   }
}