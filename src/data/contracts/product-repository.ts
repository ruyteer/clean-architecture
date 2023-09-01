import { ProductModel } from "../models/product-model";

export interface IProductRepository {
  addProduct(product: ProductModel): Promise<void>;
  getAllProducts(): Promise<ProductModel[]>;
  deleteProduct(id: string): Promise<void>;
}
