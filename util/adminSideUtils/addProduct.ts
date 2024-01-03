import { Product, IProduct } from "../../models/products";

const addProduct = async(req, res) => {
    try{
        const { productName, price, category, classes, metadata }: IProduct = req.body;

        if (!productName || !price || !category){
            return res.status(400).json('ProductName, Price and Category fields are required.');
        }

        const product = await Product.create({
            productName,
            price,
            category,
            classes,
            metadata
        });

        if (!product){
            return res.status(400).json('Invalid data');
        }

        return res.status(201).json({ productId: product.id, message: 'New Product created successfully.' });
    } catch(err){
        console.log(err);

        if (err.name === 'ValidationError') {
            // Mongoose validation error
            const validationErrors = Object.values(err.errors).map((error: any) => error.message);
            return res.status(400).json({ error: 'Validation error', details: validationErrors });
        }

        res.status(500).json('Internal Server Error');
    };
};

export default addProduct;