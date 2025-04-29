import { ICatalogRepository } from '../interface/catalog-repository-interface.js'
import { ICatalogService } from '../interface/catalog.service.interface.js'
import { Filters } from '../utils/types.js'

export class CatalogService implements ICatalogService {
  _repository: ICatalogRepository

  constructor(repository: ICatalogRepository) {
    this._repository = repository
  }
  async createProduct(data: any) {
    const product = await this._repository.create(data)
    return product
  }
  async updateProduct(data: any) {
    const updatedProduct = await this._repository.update(data)
    return updatedProduct
  }
  async deleteProduct(id: number) {
    const deletedProduct = await this._repository.delete(id)
    return deletedProduct
  }
  async findProduct(limit: number, offset: number) {
    const products = await this._repository.find(limit, offset)
    return products
  }
  getProductById(id: number) {
    const product = this._repository.findOne({ id })
    return product
  }
  getOneProduct(filter: Filters): Promise<any> {
    return this._repository.findOne(filter)
  }
}
