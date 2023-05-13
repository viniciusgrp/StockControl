import { Product } from "../../entities/products.entity";
import { AppDataSource } from "../../data-source";
import { IProduct } from "../../interfaces/product.interface";
import { AppError } from "../../errors/AppError";

export const getProductsService = async (
  orderBy: any = "id",
  page: any = 1,
  limit: any = 10,
  name: any = ""
) => {
  const productRepository = AppDataSource.getRepository(Product);

  const verifyOrder = orderBy.includes("-");
  const ascOrDesc = verifyOrder ? "DESC" : "ASC";

  const order = orderBy.replace("-", "");

  const products: IProduct[] = await productRepository
    .createQueryBuilder("product")
    .where("product.name ILIKE :name", { name: `%${name}%` })
    .skip((page - 1) * limit)
    .take(limit)
    .orderBy(`product.${order}`, `${ascOrDesc}`)
    .getMany();

  const found: number = await productRepository
    .createQueryBuilder("product")
    .where("product.name ILIKE :name", { name: `%${name}%` })
    .getCount();

  const pages = Math.ceil(found / limit);

  return { products, pages };
};

export const getSpecificProductsService = async (id: number) => {
  const productRepository = AppDataSource.getRepository(Product);

  const product = await productRepository.findOneBy({ id: id });

  if (!product) {
    throw new AppError(`Product with the ID ${id} not found`, 404);
  }

  return product;
};
