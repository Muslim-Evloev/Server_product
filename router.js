import { Router } from "express";
import ProductController from "./ProductController.js";

const router = new Router()

router.get("/products" , ProductController.getProduct)
router.post("/addproduct" , ProductController.addProducts)
router.patch("/product/:id" , ProductController.editProduct)
router.put("/product/:id" , ProductController.updateProduct)
router.delete("/product/:id" , ProductController.deleteProduct)

export default router;

