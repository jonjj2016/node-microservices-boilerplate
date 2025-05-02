import express from 'express'

import cors from 'cors'
import { cartRoutes } from './routes/cart.routes'
import { orderRoutes } from './routes/order.routes'

export const app = express()

app.use(cors())
app.use(express.json())
app.use('/carts', cartRoutes)
app.use('/orders', orderRoutes)
export default app
