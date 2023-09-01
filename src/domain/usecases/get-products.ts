import { Product } from "../entities/Product";

export interface GetProductUseCase {
  get(): Promise<Product[]>;
}
