import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'
import mongoose from 'mongoose'

dotenv.config()

mongoose.connect(String(process.env.DATABASE), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

const api = express()

const { PORT } = process.env

api.use(express.json())
api.use(cors())
api.use(routes)

api.listen(PORT, () => {
  console.log(`Api running on Port: ${PORT}`)
})

export default api
