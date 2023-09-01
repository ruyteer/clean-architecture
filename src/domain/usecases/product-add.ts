import { Product } from "../entities/Product";

export interface AddProductUseCase {
  add(product: Product): Promise<void>;
}
