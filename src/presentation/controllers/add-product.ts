import { AddProductUseCase } from "../../domain/usecases/product-add";
import { badRequest, okResponse } from "../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../protocols";

export class AddProductController implements Controller {
  constructor(private readonly addProductUseCase: AddProductUseCase) {}

  async handle(httpRequest: httpRequest<any>): Promise<httpResponse<any>> {
    try {
      await this.addProductUseCase.add(httpRequest.request.body);

      return okResponse();
    } catch (error) {
      return badRequest(error);
    }
  }
}
