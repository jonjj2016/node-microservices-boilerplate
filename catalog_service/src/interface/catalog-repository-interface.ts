import { Product } from '../models/product.model'

export interface ICatalogRepository {
  create(data: Product): Promise<Product>
  update(data: any): Promise<Product>
  find(data: any): Promise<Product[]>
  findOne(id: number): Promise<Product>
  delete(id: number): Promise<void>
}
