import { updateProductService } from './../services/Products/update.service';
import { Request, Response } from "express";
import { createProductService } from "../services/Products/create.service";
import { getProductsService } from "../services/Products/get.service";
import { deleteProductService } from '../services/Products/delete.service';
import { IProduct } from '../interfaces/product.interface';

export const createProductController = async (req: Request, res: Response) => {
    const data: IProduct = req.body

    const newProduct: IProduct = await createProductService(data)

    return res.status(201).json(newProduct)
}

export const getProductsController = async (req: Request, res: Response) => {
    const { orderBy } = req.query

    const products: IProduct[] = await getProductsService(orderBy)

    return res.status(200).json(products)
}

export const updateProductController = async (req: Request, res: Response) => {
    const data: IProduct = req.body

    const productId: number = Number(req.params.id)

    const updatedProduct: IProduct = await updateProductService(data, productId)

    return res.status(200).json(updatedProduct)
}

export const deleteProductController = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id)

    await deleteProductService(id)

    return res.status(200)
}