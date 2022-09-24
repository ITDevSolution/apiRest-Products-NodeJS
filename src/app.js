import express from "express"
import colors from "colors"
import dotenv from "dotenv"

dotenv.config()

import { dbConnect } from "./config/mongodb.js"

import productRouter from "./routes/productsRoutes.js"
const app = express()

app.use(express.json())

app.use("/api/v1/products", productRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, () =>
  console.log(colors.rainbow(`Server running in ${PORT} port`))
)

dbConnect()
