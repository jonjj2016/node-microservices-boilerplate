import { ICatalogRepository } from '../interface/catalog-repository-interface'

export class CatalogService {
  repository: ICatalogRepository

  constructor(repository: ICatalogRepository) {
    this.repository = repository
  }
  async createProduct(data: any) {
    const product = await this.repository.create(data)
    return product
  }
  async updateProduct(data: any) {
    const updatedProduct = await this.repository.update(data)
    return updatedProduct
  }
  async deleteProduct(id: number) {
    const deletedProduct = await this.repository.delete(id)
    return deletedProduct
  }
  async findProduct(limit: number, offset: number) {
    const products = await this.repository.find({ limit, offset })
    return products
  }
  getProductById(id: number) {
    const product = this.repository.findOne(id)
    return product
  }
}
