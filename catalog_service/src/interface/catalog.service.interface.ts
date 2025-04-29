import { Product } from '../models/product.model';
import { Filters } from '../utils/types'

export interface ICatalogService {
  createProduct(input: Product): Promise<any>
  updateProduct(id: number, data: any): Promise<any>
  deleteProduct(id: number): Promise<void>
  findProduct(limit: number, offset: number): Promise<any[]>
  getProductById(id: number): Promise<any>
  getOneProduct(filter: Filters): Promise<any>
}
