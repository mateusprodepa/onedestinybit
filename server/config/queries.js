const TABLES = require('./tables')

module.exports = {

  fetch_user: function(username) {
    return `SELECT * FROM ${TABLES.U00_USUARIOS} WHERE username = '${username}'`
  },

  insert_new_user: function(id, username, senha, email) {
    return `INSERT INTO ${TABLES.U00_USUARIOS}(id, username, senha, email, email_confirma) VALUES (${id}, '${username}', '${senha}', '${email}', false)`
  },

  insert_user_data: function(user_id, user_description, user_status, user_image) {
    return `INSERT INTO ${TABLES.U01_INFO_USUARIOS}(Id_Usuario, nickname, Descricao_Usuario, Usuario_Status, Usuario_Imagem, skin) VALUES(${user_id}, '', '${user_description}', ${user_status}, '${user_image}', 0)`
  },

  get_user_data: function(id) {
    return `SELECT ${TABLES.U00_USUARIOS}.Codigo, ${TABLES.U00_USUARIOS}.id, ${TABLES.U00_USUARIOS}.username, ${TABLES.U01_INFO_USUARIOS}.nickname, ${TABLES.U00_USUARIOS}.senha, ${TABLES.U01_INFO_USUARIOS}.Codigo, ${TABLES.U01_INFO_USUARIOS}.Id_Usuario, ${TABLES.U01_INFO_USUARIOS}.Descricao_Usuario, ${TABLES.U01_INFO_USUARIOS}.Usuario_Status, ${TABLES.U01_INFO_USUARIOS}.Usuario_Imagem FROM ${TABLES.U00_USUARIOS}, ${TABLES.U01_INFO_USUARIOS} WHERE ${TABLES.U01_INFO_USUARIOS}.Id_Usuario = ${id} AND ${TABLES.U00_USUARIOS}.id = ${id}`
  },

  get_last_user_id: function() {
    return `SELECT id FROM ${TABLES.U00_USUARIOS} ORDER BY id DESC LIMIT 1`
  },

  fetch_news: function() {
    return `SELECT * FROM ${TABLES.D_NOTICIAS}`;
  }
}
