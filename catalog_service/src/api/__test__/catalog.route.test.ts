import request from 'supertest'
import express from 'express'
import { catalogRoutes, service } from '../catalog.routes'
import {
  productFactory,
  mockProduct as mockRequest,
} from '../../utils/productFactory'
import { HttpStatus } from '../../utils/types'
import { faker } from '@faker-js/faker'

const app = express()
app.use(express.json())

app.use(catalogRoutes)

describe('Catalog routes', () => {
  describe('POST: products', () => {
    test('should create product ', async () => {
      const requestBody = mockRequest()
      const product = productFactory.build()
      jest
        .spyOn(service, 'createProduct')
        .mockImplementationOnce(() => Promise.resolve(product))

      const response = await request(app)
        .post('/products')
        .send(requestBody)
        .set('Accept', 'application/json')

      expect(response.status).toBe(HttpStatus.CREATED)
      expect(response.body).toEqual(product)
    })
    test('should return with validation error code: 404', async () => {
      const requestBody = mockRequest()
      const { name, ...rest } = requestBody
      const response = await request(app)
        .post('/products')
        .send({ ...rest, name: '' })
        .set('Accept', 'application/json')

      expect(response.status).toBe(HttpStatus.BAD_REQUEST)
      expect(response.body).toEqual('Name should not be empty')
    })
    test('should response with internal error code: 500 ', async () => {
      const requestBody = mockRequest()
      jest
        .spyOn(service, 'createProduct')
        .mockImplementationOnce(() =>
          Promise.reject(new Error('error occurred on create product'))
        )

      const response = await request(app)
        .post('/products')
        .send(requestBody)
        .set('Accept', 'application/json')

      expect(response.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR)
      expect(response.body).toEqual('error occurred on create product')
    })
  })
  describe('UPDATE: products/:id', () => {
    test('should update product successfully ', async () => {
      const product = productFactory.build()
      const requestBody = {
        name: product.name,
        price: product.price,
        stock: product.stock,
      }
      jest
        .spyOn(service, 'updateProduct')
        .mockImplementationOnce(() => Promise.resolve(product))

      const response = await request(app)
        .patch(`/products/${product.id}`)
        .send(requestBody)
        .set('Accept', 'application/json')

      expect(response.status).toBe(200)
      expect(response.body).toEqual(product)
    })
    test('should return with validation error code: 400', async () => {
      const product = productFactory.build()
      const requestBody = {
        name: product.name,
        price: 0,
        stock: product.stock,
      }
      const response = await request(app)
        .patch(`/products/${product.id}`)
        .send(requestBody)
        .set('Accept', 'application/json')

      expect(response.status).toBe(HttpStatus.BAD_REQUEST)
      expect(response.body).toEqual('Price should be greater than 0')
    })
    test('should response with internal error code: 500 ', async () => {
      const product = productFactory.build()
      const requestBody = {
        name: product.name,
        price: product.price,
        stock: product.stock,
      }
      jest
        .spyOn(service, 'updateProduct')
        .mockImplementationOnce(() =>
          Promise.reject(new Error('error occurred on update product'))
        )

      const response = await request(app)
        .patch(`/products/${product.id}`)
        .send(requestBody)
        .set('Accept', 'application/json')

      expect(response.status).toBe(500)
      expect(response.body).toEqual('error occurred on update product')
    })
  })
  describe('GET: products/:id', () => {
    test('should get product by id successfully status: 200 ', async () => {
      const product = productFactory.build()

      jest
        .spyOn(service, 'getProductById')
        .mockImplementationOnce(() => Promise.resolve(product))

      const response = await request(app)
        .get(`/products/${product.id}`)
        .set('Accept', 'application/json')

      expect(response.status).toBe(HttpStatus.OK)
      expect(response.body).toEqual(product)
    })

    test('should response with internal error code: 500 ', async () => {
      const product = productFactory.build()
      jest
        .spyOn(service, 'getProductById')
        .mockImplementationOnce(() =>
          Promise.reject(
            new Error('error occurred on getting product by id code :500')
          )
        )

      const response = await request(app)
        .get(`/products/${product.id}`)
        .set('Accept', 'application/json')

      expect(response.status).toBe(500)
      expect(response.body).toEqual(
        'error occurred on getting product by id code :500'
      )
    })
  })
  describe('DELETE: products/:id', () => {
    test('should delete product by id successfully status: 204', async () => {
      const product = productFactory.build()

      jest
        .spyOn(service, 'deleteProduct')
        .mockImplementationOnce(() => Promise.resolve())

      const response = await request(app)
        .delete(`/products/${product.id}`)
        .set('Accept', 'application/json')

      expect(response.status).toBe(HttpStatus.NO_CONTENT)
    })

    test('should response with internal error code: 500 ', async () => {
      const product = productFactory.build()
      jest
        .spyOn(service, 'deleteProduct')
        .mockImplementationOnce(() =>
          Promise.reject(
            new Error('error occurred on deleting product by id code :500')
          )
        )

      const response = await request(app)
        .delete(`/products/${product.id}`)
        .set('Accept', 'application/json')

      expect(response.status).toBe(500)
      expect(response.body).toEqual(
        'error occurred on deleting product by id code :500'
      )
    })
  })
  describe('GET: products?limit=10&offset=0', () => {
    test('should find all products successfully status: 200', async () => {
      const randomLimit = faker.number.int({ min: 10, max: 50 })
      const products = productFactory.buildList(randomLimit)

      jest
        .spyOn(service, 'findProduct')
        .mockImplementationOnce(() => Promise.resolve(products))

      const response = await request(app)
        .get(`/products?limit=${randomLimit}&offset=0`)
        .set('Accept', 'application/json')

      expect(response.status).toBe(HttpStatus.OK)
      expect(response.body).toEqual(products)
    })

    test('should response with internal error code: 500 ', async () => {
      jest
        .spyOn(service, 'findProduct')
        .mockImplementationOnce(() =>
          Promise.reject(new Error('error occurred on fetching all'))
        )

      const response = await request(app)
        .get(`/products`)
        .set('Accept', 'application/json')

      expect(response.status).toBe(500)
      expect(response.body).toEqual('error occurred on fetching all')
    })
  })
})
