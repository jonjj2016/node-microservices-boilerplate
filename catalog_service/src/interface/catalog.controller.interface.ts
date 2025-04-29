import { NextFunction, Request, Response } from 'express'

export interface ICatalogController {
  findProducts(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void>
  updateProducts(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void>
  getProductById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void>
  deleteProduct(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void>
  createProduct(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void>
}
