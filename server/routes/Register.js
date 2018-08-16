const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../db/db')

const queries = require('../config/queries')
const config = require('../config/config')
const utils = require('../utils/utils')

const router = express.Router()

router.post('/', (req, res) => {
  const { username, password, cnfPass, email } = req.body

  const isValidUser = utils.validate_register_request({
    username,
    password,
    cnfPass,
    email
  })

  const isEqualToZero = Object.keys(isValidUser).length === 0;

  db.connect()

  if(isEqualToZero) {
    db.query(queries.get_last_user_id(), id => {
      const newUserId = id[0]['id'] + 1;
      db.query(
        queries.insert_new_user(
          newUserId,
          username,
          bcrypt.hashSync(password, 10),
          email
        ), user => {
        jwt.sign({
          id: newUserId,
          email,
          username,
          nickname: username,
        }, config.token_secret_key, (err, token) => {
          db.query(QUERIES.insert_user_data(newUserId, '', 0, 'https://api.adorable.io/avatars/285/abott@adorable.png'),
          success => void(success))

          db.end()
          res.json({ token })
        })
      })
    })

  } else {
    db.end()
    res.json({ errors: isValidUser })
  }


})

module.exports = router
