import { Request, Response } from "express";
import { Controller } from "../../presentation/protocols";

export const productAdapt = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle({ request: req });

    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
