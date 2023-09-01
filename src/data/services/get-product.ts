import { GetProductUseCase } from "../../domain/usecases";
import { IProductRepository } from "../contracts/product-repository";
import { ProductModel } from "../models/product-model";

export class GetProductService implements GetProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async get(): Promise<ProductModel[]> {
    const products = await this.productRepository.getAllProducts();

    return products;
  }
}
