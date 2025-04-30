import express from 'express'
import { CatalogRepository } from '../repository/catalog.repository'
import { CatalogService } from '../services/catalog.service'
import { CatalogController } from '../controllers/catalog.controller'

const repository = new CatalogRepository()
export const service = new CatalogService(repository)
const controller = new CatalogController(service)
const router = express.Router()

router.get('/products', controller.findProducts.bind(controller))

router.post('/products', controller.createProduct.bind(controller))

router.patch('/products/:id', controller.updateProducts.bind(controller))

router.get('/products/:id', controller.getProductById.bind(controller))

router.delete('/products/:id', controller.deleteProduct.bind(controller))

export { router as catalogRoutes }
