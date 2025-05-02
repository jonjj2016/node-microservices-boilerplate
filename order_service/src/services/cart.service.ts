import { ICartRepository } from '../interfaces/cart.repository.interface'

export const CreateCart = async (input: any, repo: ICartRepository) => {
  const data = await repo.create(input)
  return data
}

export const GetCart = async (id: number, repo: ICartRepository) => {
  return await repo.get(id)
}

export const UpdateCart = async (input: any, repo: ICartRepository) => {
  return await repo.update(input)
}

export const DeleteCart = async (id: number, repo: ICartRepository) => {
  return await repo.delete(id)
}

export const GetAllCarts = async (
  limit: number,
  offset: number,
  repo: ICartRepository
) => {
  return await repo.find(limit, offset)
}
