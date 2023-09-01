import { AddProductUseCase } from "../../domain/usecases";
import { IProductRepository } from "../contracts/product-repository";
import { MissingParamError } from "../errors/missing-param-error";
import { ProductModel } from "../models/product-model";

export class AddProductService implements AddProductUseCase {
  constructor(private readonly addProductRepository: IProductRepository) {}

  async add(product: ProductModel): Promise<void> {
    const requiredFields = ["name", "price"];

    for (const field of requiredFields) {
      if (!product[field]) {
        throw new MissingParamError(field);
      }
    }
    await this.addProductRepository.addProduct(product);
  }
}
