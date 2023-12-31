/*
You get product Id and the parameters which are going to be changed. Assume null as default value for the parameters which are not going to be changed.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Product = require("../models/Product");
exports.editProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        // Retrieve product ID from URL parameters
        const { id } = req.params;
        // Retrieve updated data from request body
        const { productName, price, category, classes, metadata } = req.body;
        const product = yield Product.findByIdAndUpdate(id, {
            productName,
            price,
            category,
            classes,
            metadata,
        }, { new: true } // Set to true to return the updated document
        );
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        res.status(200).json({
            message: "Updated Successfully",
            updatedProduct: product,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});
