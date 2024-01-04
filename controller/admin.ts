import { Request, Response } from 'express';
import { Product, IProduct } from '../models/products';

// Controller to get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ isDeleted: false });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get a specific product by ID
export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ productId: +id, isDeleted: false });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to create a new product
export const addProduct = async (req: Request, res: Response) => {
  const productData: IProduct = req.body;

  try {
    const newProduct = await Product.create(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to update a product by ID
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const productData: IProduct = req.body;

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { productId: +id, isDeleted: false },
      productData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to delete a product by ID
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findOneAndUpdate(
      { productId: +id, isDeleted: false },
      { isDeleted: true },
      { new: true }
    );

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
