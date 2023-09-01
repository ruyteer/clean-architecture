import { prisma } from "../../../prisma/config/Prisma";
import { IProductRepository } from "../../data/contracts/product-repository";
import { ProductModel } from "../../data/models/product-model";

export class ProductRepository implements IProductRepository {
  async addProduct(product: ProductModel): Promise<void> {
    await prisma.product.create({ data: product });
  }

  async getAllProducts(): Promise<ProductModel[]> {
    const products = await prisma.product.findMany();

    return products;
  }

  async deleteProduct(id: string): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }
}
