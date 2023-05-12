import { Product } from "../../entities/products.entity"
import { AppDataSource } from "../../data-source"
import { AppError } from '../../errors/AppError';
import { IProduct } from "../../interfaces/product.interface";

export const createProductService = async (data: IProduct) => {
    const productRepository = AppDataSource.getRepository(Product)

    const find = await productRepository.findOneBy({ name: data.name })

    if (find) {
        throw new AppError ("Product already exists", 409)
    }

    const newProduct: IProduct = productRepository.create(data)

    await productRepository.save(newProduct)

    return newProduct
}