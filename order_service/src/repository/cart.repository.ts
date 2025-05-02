import { ICartRepository } from '../interfaces/cart.repository.interface'

const createCart = async (input: any): Promise<any> => {
  // connect to DB
  // perform DB operations
  return Promise.resolve({ message: 'Cart created' })
}

const updateCart = async (input: any): Promise<any> => {
  return Promise.resolve({ message: 'Cart created' })
}

const findCarts = async (limit: number, offset: number): Promise<any> => {
  return Promise.resolve({ message: 'Cart created' })
}

const getCart = async (id: number): Promise<any> => {
  return Promise.resolve({ message: 'Cart created' })
}

const deleteCart = async (id: number): Promise<any> => {
  return Promise.resolve({ message: 'Cart created' })
}

export const CartRepository: ICartRepository = {
  create: createCart,
  find: findCarts,
  get: getCart,
  update: updateCart,
  delete: deleteCart,
}
