import { ICartRepository } from '../interfaces/cart.repository.interface'

const createCart = async (input: any): Promise<any> => {
  // connect to DB
  // perform DB operations
  return Promise.resolve({ message: 'Cart created' })
}

const updateCart = async (input: any): Promise<any> => {
  return Promise.resolve({ message: 'Cart Updated' })
}

const findCarts = async (limit: number, offset: number): Promise<any> => {
  return Promise.resolve({ message: 'find all Carts' })
}

const getCart = async (id: number): Promise<any> => {
  return Promise.resolve({ message: 'Get a cart' })
}

const deleteCart = async (id: number): Promise<any> => {
  return Promise.resolve({ message: 'Cart deleted' })
}

export const CartRepository: ICartRepository = {
  create: createCart,
  find: findCarts,
  get: getCart,
  update: updateCart,
  delete: deleteCart,
}
