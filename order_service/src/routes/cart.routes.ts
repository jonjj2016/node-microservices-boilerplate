import express from 'express'
import * as service from '../services/cart.service'

const router = express.Router()

router.get('/', async (request, response) => {
  const limit = 10
  const offset = 0
  const res = await service.GetAllCarts(limit, offset)
  response.status(200).json({ message: 'Hello there Request:GET', res })
})

router.post('/', (request, response) => {
  response.status(200).json({ message: 'Hello there Request:POST' })
})

router.patch('/:id', (request, response) => {
  response.status(200).json({ message: 'Hello there Request:PATCH' })
})

router.get('/:id', (request, response) => {
  response.status(200).json({ message: 'Hello there Request:GET/:id' })
})

router.delete('/:id', (request, response) => {
  response.status(200).json({ message: 'Hello there Request:DELETE' })
})

export { router as cartRoutes }
