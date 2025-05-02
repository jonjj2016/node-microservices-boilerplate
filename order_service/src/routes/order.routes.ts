import express from 'express'
const router = express.Router()

router.get('/', (request, response) => {
  response.status(200).json({ message: 'Hello there Request:GET' })
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

export { router as orderRoutes }
