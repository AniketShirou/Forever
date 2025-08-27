import express from 'express';
import  { addProduct, getProducts, singleProduct,  deleteProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';

const productRouter = express.Router();

productRouter.post('/add',upload.fields([{ name: 'images', maxCount: 5 }]), addProduct);
productRouter.get('/list', getProducts);
productRouter.get('/single', singleProduct);
productRouter.delete('/remove', deleteProduct);

export default productRouter;