import { Request, Response, NextFunction } from 'express'
import { ICatalogController } from '../interface/catalog.controller.interface'
import { ICatalogService } from '../interface/catalog.service.interface'

export class CatalogController implements ICatalogController {
  private _service: ICatalogService

  constructor(service: ICatalogService) {
    this._service = service
  }

  async createProduct(request: Request, response: Response) {
    throw new Error('Method not implemented.')
  }

  async findProducts(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void> {
    throw new Error('Method not implemented.')
  }

  async updateProducts(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void> {
    throw new Error('Method not implemented.')
  }

  async getProductById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void> {
    throw new Error('Method not implemented.')
  }

  async deleteProduct(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void> {
    throw new Error('Method not implemented.')
  }
}
