import { DeleteProductService } from "../../data/services/delete-product";
import { badRequest, okResponse } from "../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../protocols";

export class DeleteProductController implements Controller {
  constructor(private readonly deleteProductUseCase: DeleteProductService) {}

  async handle(httpRequest?: httpRequest<any>): Promise<httpResponse<any>> {
    try {
      await this.deleteProductUseCase.delete(httpRequest.request.params.id);

      return okResponse();
    } catch (error) {
      return badRequest(error);
    }
  }
}
