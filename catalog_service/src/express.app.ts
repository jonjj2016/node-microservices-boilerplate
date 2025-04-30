import express from 'express'
import { catalogRoutes } from './api/catalog.routes.js'

export const app = express()
app.use(express.json())

app.use('/products', catalogRoutes)

export default app
