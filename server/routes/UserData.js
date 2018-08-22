const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

const config = require('../config/config')
const queries = require('../config/queries')

const db = require('../db/db')

router.get('/', verifyToken, (req, res) => {
  jwt.verify(req.token, config.token_secret_key, (err, user) => {
    db.connect()
    db.query(queries.get_user_data(user.id), userData => {
      res.json(JSON.parse(JSON.stringify(userData[0])))
    })
    db.end()
  })
})

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization']
  if(typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1]
    req.token = bearerToken

    next()
  }
}

module.exports = router
