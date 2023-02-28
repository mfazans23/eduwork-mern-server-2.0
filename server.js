const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js')
const connectDB = require('./config/database.js')

const userRoutes = require('./features/auth/router.js')
const productRoutes = require('./features/product/router.js')
const categoryRoutes = require('./features/category/router.js')
const tagRoutes = require('./features/tag/router.js')
const orderRoutes = require('./features/order/router.js')
// const uploadRoutes = require( './routes/uploadRoutes.js')

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/tag', tagRoutes)
app.use('/api/order', orderRoutes)
// app.use('/api/upload', uploadRoutes)

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
