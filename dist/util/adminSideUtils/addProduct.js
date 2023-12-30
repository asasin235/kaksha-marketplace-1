"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../../models/products");
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productName, price, category, classes, metadata } = req.body;
        if (!productName || !price || !category) {
            return res.status(400).json('ProductName, Price and Category fields are required.');
        }
        const product = yield products_1.Product.create({
            productName,
            price,
            category,
            classes,
            metadata
        });
        if (!product) {
            return res.status(400).json('Invalid data');
        }
        return res.status(201).json({ productId: product.id, message: 'New Product created successfully.' });
    }
    catch (err) {
        console.log(err);
        if (err.name === 'ValidationError') {
            // Mongoose validation error
            const validationErrors = Object.values(err.errors).map((error) => error.message);
            return res.status(400).json({ error: 'Validation error', details: validationErrors });
        }
        res.status(500).json('Internal Server Error');
    }
    ;
});
exports.default = addProduct;
