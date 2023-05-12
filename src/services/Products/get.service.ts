import { Product } from "../../entities/products.entity"
import { AppDataSource } from "../../data-source"
import { IProduct } from "../../interfaces/product.interface";

export const getProductsService = async () => {
    const productRepository = AppDataSource.getRepository(Product)

    const products: IProduct[] = await productRepository.find()

    return products
}