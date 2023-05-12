import { Product } from "../../entities/products.entity"
import { AppDataSource } from "../../data-source"
import { AppError } from '../../errors/AppError';

export const deleteProductService = async (id: number) => {
    const productRepository = AppDataSource.getRepository(Product)

    const product = await productRepository.findOneBy({ id: id })

    if (!product) {
        throw new AppError(`Product with ID ${id} not found`, 404)
    }
    
    await productRepository.delete({ id: id })
    
    return
}