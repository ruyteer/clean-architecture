import { DeleteProductService } from "../../data/services/delete-product";
import { ProductRepository } from "../../infra/repositories/product-repository";
import { DeleteProductController } from "../../presentation/controllers/delete-product";
import { Controller } from "../../presentation/protocols";

export const makeDeleteProductImplementations = (): Controller => {
  const productRepository = new ProductRepository();
  const useCases = new DeleteProductService(productRepository);
  return new DeleteProductController(useCases);
};
