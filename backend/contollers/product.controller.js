import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts =  async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    }catch(error){
        console.log("Error in fetching products", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const createProduct =  async (req, res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    }catch(error){
        console.error("Error in Create product", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const deleteProduct =  async (req, res) => {
    const {id} = req.params;
    console.log("id:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid Product ID"});
    }

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product Deleted"});
    }catch (error){
        res.status(404).json({success: false, message: "Product Not Found"});

    }
}

export const updateProduct =  async (req,res) =>{
    const {id} = req.params;
    const products = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid Product ID"});
    }

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, products, {new: true});
        res.status(200).json({success: true, message: "Product Updates"});
    }catch(error){  
        console.log("Error in updating product", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}