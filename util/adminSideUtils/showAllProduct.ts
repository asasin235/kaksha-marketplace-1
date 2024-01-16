import { Product } from "../../models/products";
import client from "../../config/redis";
import { Category } from "../../models/category"; // Import the Category model

export const ShowAllProduct = async (req, res) => {
    try {
        const { categoryName } = req.body;

        // Fetch the category ID from the Category schema
        const category = await Category.findOne({ categoryName }); // Adjust the field based on your Category schema

        if (!category) {
            // Handle the case where the category is not found
            return res.status(404).json({
                message: "Category not found",
            });
        }

        const categoryId = category["_id"];

        // Check if data is in Redis cache
        const cacheKey = categoryName;
        const cachedData = await client.get(cacheKey);

        if (cachedData) {
            // If data is found in cache, return it
            const parsedData = JSON.parse(cachedData);
            return res.status(200).json({
                message: "Found in Cache",
                data: parsedData
            });
        }

        // If data is not found in cache, fetch it from the database
        const response = await Product.find({ category: categoryId });

        // Store the data in Redis cache for future use
        await client.set(cacheKey, JSON.stringify(response));

        res.status(200).json({
            message: "Found in Database",
            data: response
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
};