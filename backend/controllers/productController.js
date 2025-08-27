import cloudinary  from 'cloudinary';
import Product from '../models/productModel.js';

// function for add product (only admin)
const addProduct = async (req, res) => {
    try{
        const { name, description, price, category, subCategory, sizes , bestseller } = req.body;
        
        const images = (req.files?.images || []).filter(Boolean);
    
        const imagesUrl = await Promise.all(
            images.map(async (item) =>{
                const result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'}, {
                    folder: 'products'
                });
                return result.secure_url          
            })
        )

        // console.log(imagesUrl);

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            size: sizes ? sizes.split(',') : [],
            bestSeller: bestseller === 'true' ? true : false,
            images: imagesUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = await Product.create(productData);
        await product.save();

        res.json({ message: 'Product Added Successfully', success: true });
    } catch (error) {
        console.error(error);
        res.json({ message: error.message, success: false });  
    }
}

// function for list products
const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.json({ products, success: true });
    } catch (error) {
        console.error(error);
        res.json({ message: error.message, success: false });  
    }
}

// function for get single product
const singleProduct = async (req, res) => {
    try{
         const {productId} = req.body;
         const product = await Product.findById(productId);
         res.json({ product, success: true });
         
    } catch (error) {
        console.error(error);
        res.json({ message: error.message, success: false });   
    }
    
}


// function for delete product by id[id in body] (only admin)
const deleteProduct = async (req, res) => {
    try{
         await Product.findByIdAndDelete(req.body.id);
         res.json({ message: 'Product Deleted Successfully', success: true });
    } catch (error) {
        console.error(error);
        res.json({ message: error.message, success: false });
    }
}

export { addProduct, getProducts, singleProduct, deleteProduct };