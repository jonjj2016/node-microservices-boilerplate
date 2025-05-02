import express from 'express'
import * as service from '../services/cart.service'
import { CartRepository } from '../repository/cart.repository'
import { HttpStatus } from '../utils/types'

const router = express.Router()
const repository = CartRepository

router.get('/', async (request, response) => {
  const limit = 10
  const offset = 0
  const res = await service.GetAllCarts(limit, offset, repository)
  response
    .status(HttpStatus.OK)
    .json({ message: 'Hello there Request:GET', res })
})
router.post('/', async (request, response) => {
  console.log('🚀 ~ router.post ~ (request.body:', request.body)

  const data = await service.CreateCart(request.body, repository)
  response.status(HttpStatus.CREATED).json({ data })
})

router.patch('/:id', async (request, response) => {
  const data = await service.UpdateCart(request.body, repository)
  response.status(HttpStatus.ACCEPTED).json({ data })
})

router.get('/:id', async (request, response) => {
  const data = await service.GetCart(Number(request.params.id), repository)
  response.status(HttpStatus.OK).json({ data })
})

router.delete('/:id', async (request, response) => {
  const data = await service.DeleteCart(Number(request.params.id), repository)
  response.status(HttpStatus.NO_CONTENT).json({ data })
})

export { router as cartRoutes }
