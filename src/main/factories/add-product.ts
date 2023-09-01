import { AddProductService } from "../../data/services/add-product";
import { ProductRepository } from "../../infra/repositories/product-repository";
import { AddProductController } from "../../presentation/controllers/add-product";
import { Controller } from "../../presentation/protocols";

export const makeAddProductController = (): Controller => {
  const addProductRepo = new ProductRepository();
  const addProductUseCase = new AddProductService(addProductRepo);
  return new AddProductController(addProductUseCase);
};
