import express from 'express';
const AdminRouter = express.Router();
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/admin');

AdminRouter.route('/products').get(getAllProducts);
AdminRouter.route('/products/:id').get(getProductById);
AdminRouter.route('/products').post(createProduct);
AdminRouter.route('/products/:id').put(updateProduct);
AdminRouter.route('/products/:id').delete(deleteProduct);

export default AdminRouter;
