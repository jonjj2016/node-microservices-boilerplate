import express from 'express'
import { CatalogRepository } from '../repository/catalog.repository'
import { CatalogService } from '../services/catalog.service'
import { CatalogController } from '../controllers/catalog.controller'

const repository = new CatalogRepository()
export const service = new CatalogService(repository)
const controller = new CatalogController(service)
const router = express.Router()

router.get('/', controller.findProducts.bind(controller))

router.post('/', controller.createProduct.bind(controller))

router.patch('/:id', controller.updateProducts.bind(controller))

router.get('/:id', controller.getProductById.bind(controller))

router.delete('/:id', controller.deleteProduct.bind(controller))

export { router as catalogRoutes }
