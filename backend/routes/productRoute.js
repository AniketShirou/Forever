import express from 'express';
import  { addProduct, getProducts, singleProduct,  deleteProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add',adminAuth, upload.fields([{ name: 'images', maxCount: 5 }]), addProduct);
productRouter.get('/list', getProducts);
productRouter.get('/single', singleProduct);
productRouter.delete('/remove', adminAuth, deleteProduct);

export default productRouter;