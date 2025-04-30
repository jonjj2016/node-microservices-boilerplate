import express from 'express'
import { catalogRoutes } from './api/catalog.routes.js'

export const app = express()
app.use(express.json())

app.use('/api/v1/product/bb', catalogRoutes)

export default app
