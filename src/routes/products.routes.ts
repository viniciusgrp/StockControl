import { Router } from 'express';
import { createProductController, deleteProductController, getProductsController, updateProductController } from '../controllers/products.controller';

const productRoutes = Router()

productRoutes.post("", createProductController)
productRoutes.get("", getProductsController)
productRoutes.patch("/:id", updateProductController)
productRoutes.delete("/:id", deleteProductController)

export default productRoutes