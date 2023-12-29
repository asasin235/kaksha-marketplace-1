import { Product } from "../../models/products";

const addProduct = async(req, res) => {
    try{
        interface RequestBody{
            productName: string,
            price: number,
            category: string,
            classes: object,
            metadata: object,
        };

        const { productName, price, category, classes, metadata }: RequestBody = req.body;

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
        res.status(500).json('Internal Server Error');
    };
};

export default addProduct;