import { GetProductService } from "../../data/services";
import { badRequest, okResponse } from "../helpers/http-response";
import { Controller, httpResponse } from "../protocols";

export class GetProductController implements Controller {
  constructor(private readonly getProductUseCase: GetProductService) {}

  async handle(): Promise<httpResponse<any>> {
    try {
      const products = await this.getProductUseCase.get();

      return okResponse(products);
    } catch (error) {
      return badRequest(error);
    }
  }
}
