const express = require('express')
const jwt = require('jsonwebtoken')
const db = require('../db/db')
const queries = require('../config/queries')
const tables = require('../config/tables')
const config = require('../config/config')
const utils = require('../utils/utils')

const router = express.Router()

router.post('/', (req, res) => {

  const { username, password } = req.body

  db.connect()
  db.query(
    queries.fetch_user( username ),
    user => {

      let user_data, user_credentials

      if(user[0]) {
        user_data = JSON.parse(JSON.stringify(user[0]))
        user_credentials = {
          id: user_data.id,
          email: user_data.email,
          username: user_data.username,
          nickname: user_data.nickname,
        }
      }

      const isValidUser = utils.validage_login_request(user[0], { username, password })
      const isEqualToZero = Object.keys(isValidUser).length === 0

      if(isEqualToZero) {

        jwt.sign(user_credentials, config.token_secret_key,
          (err, token) =>
            res.json({ token }))

      } else {
        res.json({ errors: isValidUser })
      }
    })

    db.end()
})

module.exports = router
