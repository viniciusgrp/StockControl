import { Product } from "../../entities/products.entity"
import { AppDataSource } from "../../data-source"
import { AppError } from '../../errors/AppError';
import { IProduct } from "../../interfaces/product.interface";

export const updateProductService = async (data: IProduct, id: number) => {
    const productRepository = AppDataSource.getRepository(Product)

    const product = productRepository.findOneBy({ id: id })
    
    if (!product) {
        throw new AppError("Product ID not find", 404)
    }

    const productToUpdate = {
        ...product,
        ...data
    }

    const updatedProduct = await productRepository.create(productToUpdate)

    const response = await productRepository.save(updatedProduct)

    return response
}