const bcrypt = require('bcrypt')

const db = require('../db/db')

const QUERIES = require('../config/queries')
const TABLES = require('../config/tables')

module.exports = {

  validage_login_request: function(user, credentials) {
    let errors = {}

    if(!user) {
      return errors = { ...errors, username: 'É este mesmo o seu nome de usuário?' }
    }

    if(user.username.length === 0 || user.username === null || user.username === "") {
      return errors = { ...errors, username: "Eu não sei bem, mas suspeito que você esqueceu de algo..." }
    }

    if(credentials.password.length === 0) {
      errors = { ...errors, password: "Não deixe sua senha em branco" }
    }

    if(!bcrypt.compareSync(credentials.password, user.senha)) {
      errors = { ...errors, password: "Ops, você inseriu algo errado aqui!" }
    }

    return errors
  },

  validate_register_request: function(credentials) {
    let errors = {}

    if(credentials.username.length < 5) {
      errors = { ...errors, username: "Seu nome deve conter pelo menos 5 caracteres" }
    }

    if(credentials.username === "" || null || credentials.length === 0) {
      errors = { ...errors, username: "Por favor, não deixe os campos em branco" }
    }

    if(credentials.username.length > 10) {
      errors = { ...errors, username: "Seu nome de usuário deve conter no máximo 10 caracteres" }
    }

    if(credentials.email == "" || null || credentials.length === 0) {
      errors = { ...errors, email: "Não deixe seu email em branco" }
    }

    if(credentials.password.length < 8) {
      errors = { ...errors, password: "Sua senha deve conter no mínimo 8 caracteres" }
    }

    if(credentials.password !== credentials.cnfPass) {
      errors = { ...errors, password: "As senhas devem combinar" }
    }

    if(credentials.password === "" || null || credentials.length === 0) {
      errors = { ...errors, password: "Não deixe sua senha em branco" }
    }

    return errors
  }
}
