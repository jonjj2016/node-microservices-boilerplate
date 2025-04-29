import { ICatalogRepository } from '../interface/catalog-repository-interface'
import { Product } from '../models/product.model'

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
  findOne(id: number): Promise<Product> {
    throw new Error('Method not implemented CatalogRepository')
  }
  delete(id: number): Promise<void> {
    throw new Error('Method not implemented CatalogRepository')
  }
}
