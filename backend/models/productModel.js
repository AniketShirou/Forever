import e from "express";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    size: { type: [String], required: true },
    bestSeller: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
   }, { timestamps: true }
);

const Product = mongoose.models.product || mongoose.model('Product', productSchema);
export default Product;