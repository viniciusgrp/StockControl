import { Product } from "../../entities/products.entity";
import { AppDataSource } from "../../data-source";
import { IProduct } from "../../interfaces/product.interface";

export const getProductsService = async (orderBy: any) => {
  const productRepository = AppDataSource.getRepository(Product);

  let products: IProduct[] = [];

  console.log(orderBy);

  switch (orderBy) {
    case "name":
      products = await productRepository
        .createQueryBuilder("product")
        .orderBy("product.name", "ASC")
        .getMany();
      break;
    case "-name":
      products = await productRepository
        .createQueryBuilder("product")
        .orderBy("product.name", "DESC")
        .getMany();
      break;
    case "price":
      products = await productRepository
        .createQueryBuilder("product")
        .orderBy("product.price", "ASC")
        .getMany();
      break;
    case "-price":
      products = await productRepository
        .createQueryBuilder("product")
        .orderBy("product.price", "DESC")
        .getMany();
      break;
    case "quantityStock":
      products = await productRepository
        .createQueryBuilder("product")
        .orderBy("product.quantityStock", "ASC")
        .getMany();
      break;
    case "-quantityStock":
      products = await productRepository
        .createQueryBuilder("product")
        .orderBy("product.quantityStock", "DESC")
        .getMany();
      break;
    default:
      products = await productRepository.find();
  }

  return products;
};
