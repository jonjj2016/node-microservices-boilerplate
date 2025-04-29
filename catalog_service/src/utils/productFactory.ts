import { faker } from '@faker-js/faker'
import { Factory } from 'rosie'
import { Product } from '../models/product.model'

export const productFactory = new Factory<Product>()
  .attr('name', () => faker.commerce.productName())
  .attr('id', faker.number.int({ min: 1, max: 1000 }))
  .attr('description', () => faker.commerce.productDescription())
  .attr('stock', () => faker.number.int({ min: 10, max: 1000 }))
  .attr('price', () => +faker.commerce.price())

export const mockProduct = (data?: any) => {
  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({ min: 10, max: 1000 }),
    price: +faker.commerce.price(),
    ...data,
  }
}
