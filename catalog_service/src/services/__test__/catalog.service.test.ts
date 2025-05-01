import { faker } from '@faker-js/faker/.'
import { ICatalogRepository } from '../../interface/catalog.repository-interface'
import { ICatalogService } from '../../interface/catalog.service.interface'
import { mockProduct, productFactory } from '../../utils/productFactory'
import { CatalogService } from '../catalog.service'
import { MockCatalogRepository } from '../../repository/mock.catalog.repository'

describe('CatalogService', () => {
  let _repository: ICatalogRepository
  let service: ICatalogService
  beforeEach(() => {
    _repository = new MockCatalogRepository()
  })
  afterEach(() => {
    _repository = {} as ICatalogRepository
    service = {} as ICatalogService
  })
  describe('create product', () => {
    test('Should create a product', async () => {
      const service = new CatalogService(_repository)
      const requestBody = mockProduct()
      const result = await service.createProduct(requestBody)
      expect(result).toMatchObject({
        name: expect.any(String),
        description: expect.any(String),
        price: expect.any(Number),
        stock: expect.any(Number),
      })
    })
    test("Should throw error if product can't be created", async () => {
      const service = new CatalogService(_repository)
      const requestBody = mockProduct()
      jest
        .spyOn(_repository, 'create')
        .mockRejectedValue(new Error('unable to create product'))
      await expect(service.createProduct(requestBody)).rejects.toThrow(
        'unable to create product'
      )
    })
    test('Should throw error if product already exists', async () => {
      const service = new CatalogService(_repository)
      const requestBody = mockProduct()
      jest
        .spyOn(_repository, 'create')
        .mockRejectedValue(new Error('product already exists'))
      await expect(service.createProduct(requestBody)).rejects.toThrow(
        'product already exists'
      )
    })
  })
  describe('updateProduct', () => {
    test('should update product', async () => {
      const service = new CatalogService(_repository)
      const requestBody = mockProduct({
        id: faker.number.int({ min: 10, max: 1000 }),
      })
      const result = await service.updateProduct(requestBody.id, requestBody)
      expect(result).toMatchObject(requestBody)
    })

    test('throw error with no product found', async () => {
      const service = new CatalogService(_repository)
      const requestBody = mockProduct({
        id: faker.number.int({ min: 10, max: 1000 }),
      })
      jest
        .spyOn(_repository, 'update')
        .mockRejectedValue(new Error('no product found with given id'))
      await expect(
        service.updateProduct(requestBody.id, requestBody)
      ).rejects.toThrow('no product found with given id')
    })
  })
  describe('deleteProduct', () => {
    test('should delete product', async () => {
      const service = new CatalogService(_repository)
      const requestBody = mockProduct({
        id: faker.number.int({ min: 10, max: 1000 }),
      })
      const result = await service.deleteProduct(requestBody.id)
      expect(result).toBeUndefined()
    })

    test('throw error with no product found', async () => {
      const service = new CatalogService(_repository)
      jest
        .spyOn(_repository, 'delete')
        .mockRejectedValue(new Error('no product found with given id'))
      await expect(
        service.deleteProduct(faker.number.int({ min: 10, max: 1000 }))
      ).rejects.toThrow('no product found with given id')
    })
  })
  describe('findAllProducts', () => {
    test('should find all products', async () => {
      const service = new CatalogService(_repository)
      const randomLimit = faker.number.int({ min: 10, max: 50 })
      const products = productFactory.buildList(randomLimit)
      jest
        .spyOn(_repository, 'find')
        .mockImplementationOnce(() => Promise.resolve(products))
      const result = await service.findProduct(randomLimit, 0)

      expect(result.length).toBeGreaterThan(0)
      expect(result).toMatchObject(products)
    })

    test('throw error with no products found', async () => {
      const service = new CatalogService(_repository)
      jest
        .spyOn(_repository, 'find')
        .mockRejectedValue(new Error('no products found'))
      await expect(
        service.findProduct(faker.number.int({ min: 10, max: 50 }), 0)
      ).rejects.toThrow('no products found')
    })
  })

  describe('getProductById', () => {
    test('should find product by id', async () => {
      const service = new CatalogService(_repository)

      const product = productFactory.build()
      jest
        .spyOn(_repository, 'findOne')
        .mockImplementationOnce(() => Promise.resolve(product))
      const result = await service.getProductById(product.id!)
      expect(result).toMatchObject(product)
    })

    test('throw error with no product found', async () => {
      const service = new CatalogService(_repository)
      jest
        .spyOn(_repository, 'findOne')
        .mockRejectedValue(new Error('no product found with given id'))
      await expect(
        service.getProductById(faker.number.int({ min: 10, max: 1000 }))
      ).rejects.toThrow('no product found with given id')
    })
  })
  describe('getOneProduct', () => {
    test('should find product by id', async () => {
      const service = new CatalogService(_repository)
      const product = productFactory.build()
      jest
        .spyOn(_repository, 'findOne')
        .mockImplementationOnce(() => Promise.resolve(product))
      const result = await service.getOneProduct({ id: product.id })
      expect(result).toMatchObject(product)
    })

    test('throw error with no product found', async () => {
      const service = new CatalogService(_repository)
      jest
        .spyOn(_repository, 'findOne')
        .mockRejectedValue(new Error('no product found with given id'))
      await expect(
        service.getOneProduct({
          id: String(faker.number.int({ min: 10, max: 1000 })),
        })
      ).rejects.toThrow('no product found with given id')
    })
  })
})
