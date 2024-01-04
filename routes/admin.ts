import express from 'express';
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/admin');

router.route('/products').get(getAllProducts);
router.route('/products/:id').get(getProductById);
router.route('/products').post(addProduct);
router.route('/products/:id').put(updateProduct);
router.route('/products/:id').delete(deleteProduct);

export default router;
