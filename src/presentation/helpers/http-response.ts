import { httpResponse } from "../protocols";

export const badRequest = (error: Error): httpResponse => ({
  statusCode: 400,
  body: error.message,
});

export const okResponse = (data?: any): httpResponse => ({
  statusCode: 200,
  body: data,
});
