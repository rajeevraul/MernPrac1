import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../contollers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", updateProduct);
router.put("/:id", deleteProduct);

export default router;