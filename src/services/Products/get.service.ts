import { Product } from "../../entities/products.entity";
import { AppDataSource } from "../../data-source";
import { IProduct } from "../../interfaces/product.interface";
import { AppError } from "../../errors/AppError";

export const getProductsService = async (
  orderBy: any,
  page: any = 1,
  limit: any = 10
) => {
    const productRepository = AppDataSource.getRepository(Product);
    
    console.log("LIMITE", limit)

  let products: IProduct[] = [];

  console.log(orderBy);

  switch (orderBy) {
    case "name":
      products = await productRepository
        .createQueryBuilder("product")
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy("product.name", "ASC")
        .getMany();
      break;
    case "-name":
      products = await productRepository
        .createQueryBuilder("product")
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy("product.name", "DESC")
        .getMany();
      break;
    case "price":
      products = await productRepository
        .createQueryBuilder("product")
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy("product.price", "ASC")
        .getMany();
      break;
    case "-price":
      products = await productRepository
        .createQueryBuilder("product")
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy("product.price", "DESC")
        .getMany();
      break;
    case "quantityStock":
      products = await productRepository
        .createQueryBuilder("product")
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy("product.quantityStock", "ASC")
        .getMany();
      break;
    case "-quantityStock":
      products = await productRepository
        .createQueryBuilder("product")
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy("product.quantityStock", "DESC")
        .getMany();
      break;
    default:
        products = await productRepository
        .createQueryBuilder("product")
        .skip((page - 1) * limit)
        .take(limit)
        .getMany();
      break;
  }

  return products;
};


export const getSpecificProductsService = async (
  id: number,
) => {
    const productRepository = AppDataSource.getRepository(Product);
   
  const product = await productRepository.findOneBy({ id: id })
  
  if (!product) {
    throw new AppError(`Product with the ID ${id} not found`, 404)
  }

  return product;
};