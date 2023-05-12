import express from "express"
import 'express-async-errors'
import handleError from "./errors/handleError"
import productRoutes from "./routes/products.routes"

const app = express()
app.use(express.json())

app.use("/products", productRoutes)

app.use(handleError)

export default app