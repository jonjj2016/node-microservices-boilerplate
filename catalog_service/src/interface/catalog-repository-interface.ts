import { Product } from '../models/product.model.js'
import { Filters } from '../utils/types.js'

export interface ICatalogRepository {
  create(data: Product): Promise<Product>
  update(id: number, data: any): Promise<Product>
  find(limit: number, offset: number, filters?: Filters): Promise<Product[]>
  findOne(filters: Filters): Promise<Product>
  delete(id: number): Promise<void>
}
