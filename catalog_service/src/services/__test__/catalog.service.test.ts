import { ICatalogRepository } from '../../interface/catalog-repository-interface'
import { ICatalogService } from '../../interface/catalog.service.interface'
import { MockCatalogRepository } from '../../repository/mock.catalog.repository'
import { mockProduct } from '../../utils/productFactory'
import { CatalogService } from '../catalog.service'

describe('CatalogService', () => {
  let repository: ICatalogRepository
  let service: ICatalogService
  beforeEach(() => {
    repository = new MockCatalogRepository()
  })
  afterEach(() => {
    repository = {} as MockCatalogRepository
    service = {} as ICatalogService
  })
  describe('create product', () => {
    test('Should create a product', async () => {
      const service = new CatalogService(repository)
      const requestBody = mockProduct()
      const result = await service.createProduct(requestBody)
      console.log('🚀 ~ test ~ result:', result)
      expect(result).toMatchObject({
        name: expect.any(String),
        description: expect.any(String),
        price: expect.any(Number),
        stock: expect.any(Number),
      })
    })
    test("Should throw error if product can't be created", async () => {})
    test('Should throw error if product already exists', async () => {})
  })
})
