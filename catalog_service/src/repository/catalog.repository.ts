import { ICatalogRepository } from '../interface/catalog-repository-interface'

export class CatalogRepository implements ICatalogRepository {
  create(data: any): Promise<{}> {
    throw new Error('Method not implemented CatalogRepository')
  }
  find(data: any): Promise<[]> {
    throw new Error('Method not implemented CatalogRepository')
  }
  update(data: any): Promise<{}> {
    throw new Error('Method not implemented CatalogRepository')
  }
  findOne(id: number): Promise<{}> {
    throw new Error('Method not implemented CatalogRepository')
  }
  delete(id: number): Promise<void> {
    throw new Error('Method not implemented CatalogRepository')
  }
}
