export interface httpRequest<T = any> {
  request: T;
}

export interface httpResponse<T = any> {
  statusCode: number;
  body: T;
}
