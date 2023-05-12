import { Product } from "../../entities/products.entity"
import { AppDataSource } from "../../data-source"
import { AppError } from '../../errors/AppError';

export const deleteProductService = async (id: number) => {
    const productRepository = AppDataSource.getRepository(Product)

    const product = await productRepository.findOneByOrFail({ id: id })
    
    await productRepository.delete({ id: id })
    
    return
}