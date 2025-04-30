import { Request, Response, NextFunction } from 'express'
import { ICatalogController } from '../interface/catalog.controller.interface.js'
import { ICatalogService } from '../interface/catalog.service.interface.js'
import { RequestValidator } from '../utils/request-validator'
import { CreateProductRequest, UpdateProductRequest } from '../dto/product.dto'
import { HttpStatus } from '../utils/types'
import { parsePagination } from '../utils/parse-pagination'

export class CatalogController implements ICatalogController {
  private _service: ICatalogService

  constructor(service: ICatalogService) {
    this._service = service
  }

  async createProduct(request: Request, response: Response) {
    try {
      const { error, input } = await RequestValidator(
        CreateProductRequest,
        request.body
      )

      if (error !== undefined && error !== false) {
        return response.status(400).json(error)
      }
      const data = await this._service.createProduct(input)
      return response.status(HttpStatus.CREATED).json(data)
    } catch (error) {
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json((error as Error).message)
    }
  }

  async findProducts(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void> {
    try {
      const {
        limit: queryLimit = '10',
        offset: queryOffset = '0',
        ...filters
      } = request.query as {
        limit?: string
        offset?: string
        [key: string]: any
      }
      const { offset, limit } = parsePagination({
        limit: queryLimit,
        offset: queryOffset,
      })
      const products = await this._service.findProduct(limit, offset, filters)
      response.status(HttpStatus.OK).json(products)
    } catch (error) {
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json((error as Error).message)
    }
  }

  async updateProducts(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void> {
    try {
      const id = parseInt(request.params.id)
      // validate id TODO
      const { error, input } = await RequestValidator(
        UpdateProductRequest,
        request.body
      )

      if (error !== undefined && error !== false) {
        return response.status(400).json(error)
      }

      const data = await this._service.updateProduct(id, input)

      return response.status(HttpStatus.OK).json({ ...data })
    } catch (error) {
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json((error as Error).message)
    }
  }

  async getProductById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void> {
    try {
      const id = parseInt(request.params.id)
      const data = await this._service.getProductById(id)

      return response.status(HttpStatus.OK).json({ ...data })
    } catch (error) {
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json((error as Error).message)
    }
  }

  async deleteProduct(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any> | void> {
    try {
      const id = parseInt(request.params.id)

      await this._service.deleteProduct(id)

      return response.status(HttpStatus.NO_CONTENT).json()
    } catch (error) {
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json((error as Error).message)
    }
  }
}
