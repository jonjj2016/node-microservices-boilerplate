import { PrismaClient } from '@prisma/client'
import { ICatalogRepository } from '../interface/catalog.repository-interface.js'
import { Product } from '../models/product.model.js'
import { Filters } from '../utils/types.js'

export class CatalogRepository implements ICatalogRepository {
  _prisma: PrismaClient
  constructor() {
    this._prisma = new PrismaClient()
  }

  async create(data: Product): Promise<Product> {
    return this._prisma.product.create({ data })
  }


  async find(
    limit: number,
    offset: number,
    filters: Filters
  ): Promise<Product[]> {
    return this._prisma.product.findMany({ take: limit, skip: offset })
  }

  async update(id: number, data: any): Promise<Product> {
    return this._prisma.product.update({ where: { id }, data })
  }

  async findOne(filters: Filters): Promise<Product> {
    const product = await this._prisma.product.findFirst({
      where: { ...filters },
    })
    if (!product) {
      throw new Error('no product found with given id')
    }
    return product
  }

  async delete(id: number): Promise<any> {
    return this._prisma.product.delete({ where: { id } })
  }

  async findById(id: number): Promise<Product> {
    const product = await this._prisma.product.findUnique({ where: { id } })
    if (!product) {
      throw new Error('no product found with given id')
    }
    return product
  }
}
