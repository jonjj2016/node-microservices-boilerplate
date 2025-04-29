import { ICatalogRepository } from '../interface/catalog-repository-interface.js'
import { Product } from '../models/product.model.js'
import { Filters } from '../utils/types.js';

export class MockCatalogRepository implements ICatalogRepository {
  async create(data: Product): Promise<Product> {
    const myProduct = {
      ...data,
    }
    return Promise.resolve(myProduct)
  }
  async update(data: Product): Promise<any> {
    return Promise.resolve(data)
  }
  async delete(id: number): Promise<void> {
    Promise.resolve(true)
  }
  async find(limit: number, offset: number): Promise<Product[]> {
    return Promise.resolve([])
  }
  async findById(id: number): Promise<Product> {
    return Promise.resolve({ id } as Product)
  }
  async findOne(filters: Filters): Promise<Product> {
    return Promise.resolve({} as Product)
  }
}
