const jwt = require('jsonwebtoken')
const config = require('../config/config')

const generateToken = (payload) => {
  const expiresIn = '7d'
  const secretKey = config.secretKey

  const token = jwt.sign(payload, secretKey, { expiresIn })

  return token
}

module.exports = generateToken
