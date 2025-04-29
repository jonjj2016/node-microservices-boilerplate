import { ICatalogRepository } from '../interface/catalog-repository-interface.js'
import { Product } from '../models/product.model.js'
import { Filters } from '../utils/types.js'

export class CatalogRepository implements ICatalogRepository {
  create(data: Product): Promise<Product> {
    throw new Error('Method not implemented CatalogRepository')
  }
  find(data: any): Promise<Product[]> {
    throw new Error('Method not implemented CatalogRepository')
  }
  update(data: any): Promise<Product> {
    throw new Error('Method not implemented CatalogRepository')
  }
  findOne(filters: Filters): Promise<Product> {
    throw new Error('Method not implemented CatalogRepository')
  }
  delete(id: number): Promise<void> {
    throw new Error('Method not implemented CatalogRepository')
  }
}
