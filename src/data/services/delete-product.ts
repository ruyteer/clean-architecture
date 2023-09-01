import { DeleteProductUseCase } from "../../domain/usecases/delete-products";
import { IProductRepository } from "../contracts/product-repository";
import { MissingParamError } from "../errors/missing-param-error";

export class DeleteProductService implements DeleteProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async delete(id: string): Promise<void> {
    if (!id) {
      throw new MissingParamError("id");
    }

    await this.productRepository.deleteProduct(id);
  }
}
