export interface ICatalogRepository {
  create(data: any): Promise<{}>
  update(data: any): Promise<{}>
  find(data: any): Promise<[]>
  findOne(id: number): Promise<{}>
  delete(id: number): Promise<void>
}
