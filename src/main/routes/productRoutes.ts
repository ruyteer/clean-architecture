import { Router } from "express";
import {
  makeAddProductController,
  makeGetProductImplementations,
} from "../factories";
import { productAdapt } from "../adapters/product";
import { makeDeleteProductImplementations } from "../factories/delete-product";

const productRouter = Router();

productRouter.post("/create", productAdapt(makeAddProductController()));
productRouter.get("/products", productAdapt(makeGetProductImplementations()));
productRouter.delete(
  "/delete/:id",
  productAdapt(makeDeleteProductImplementations())
);

export { productRouter };
