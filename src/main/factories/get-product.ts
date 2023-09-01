import { GetProductService } from "../../data/services";
import { ProductRepository } from "../../infra/repositories/product-repository";
import { GetProductController } from "../../presentation/controllers/get-products";
import { Controller } from "../../presentation/protocols";

export const makeGetProductImplementations = (): Controller => {
  const productRepository = new ProductRepository();
  const getProductUseCase = new GetProductService(productRepository);
  return new GetProductController(getProductUseCase);
};
