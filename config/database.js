const mongoose = require('mongoose')
const config = require('./config')

mongoose.set('strictQuery', true)

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

module.exports = connectDB
