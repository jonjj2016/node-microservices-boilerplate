import { ICatalogRepository } from '../interface/catalog-repository-interface.js'
import { Product } from '../models/product.model.js'
import { Filters } from '../utils/types.js'

export class CatalogRepository implements ICatalogRepository {
  create(data: Product): Promise<Product> {
    return Promise.resolve({ ...data, id: 1 })
  }
  find(limit: number, offset: number, filters: Filters): Promise<Product[]> {
    return Promise.resolve([{} as Product])
  }
  update(data: any): Promise<Product> {
    return Promise.resolve(data)
  }
  findOne(filters: Filters): Promise<Product> {
    return Promise.resolve({} as Product)
  }
  delete(id: number): Promise<void> {
    return Promise.resolve()
  }
  findById(id: number): Promise<Product> {
    return Promise.resolve({} as Product)
  }
}
