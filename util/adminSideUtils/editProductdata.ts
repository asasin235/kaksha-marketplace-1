/*
You get product Id and the parameters which are going to be changed. Assume null as default value for the parameters which are not going to be changed.
 */
 


const Product = require("../models/Product");

exports.editProduct = async (req, res) => {
    try {
        // Retrieve product ID from URL parameters
        const { id } = req.params;

        // Check if required parameters are present
        if (!id) {
            return res.status(400).json({
                error: "Product ID is required for editing.",
            });
        }

        
        const { productName, price, category, classes, metadata } = req.body;

        // Use findByIdAndUpdate to update the product by ID
        const product = await Product.findByIdAndUpdate(
            id,
            {
                productName,
                price,
                category,
                classes,
                metadata,
            },
            { new: true } // Set to true to return the updated document
        );

        // Check if the product was not found
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        // Return a consistent success response
        res.status(200).json({
            message: "Updated Successfully",
            updatedProduct: product,
        });
    } catch (err) {
        console.error(err);

        // Return a consistent error response
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
};
