import express from 'express'
const router = express.Router()

router.get('/', (request, response) => {
  response.send('catalog')
})

router.post('/', (request, response) => {
  console.log(request.body)
  response.send('catalog')
})

// router.patch('/:id')

// router.get('/:id')

// router.delete('/:id')

export { router as catalogRoutes }
