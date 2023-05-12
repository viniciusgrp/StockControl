import { Router } from 'express';
import { createProductController, deleteProductController, getProductsController, updateProductController, getSpecificProductController } from '../controllers/products.controller';

const productRoutes = Router()

productRoutes.post("", createProductController)
productRoutes.get("", getProductsController)
productRoutes.get("/:id", getSpecificProductController)
productRoutes.patch("/:id", updateProductController)
productRoutes.delete("/:id", deleteProductController)

export default productRoutes