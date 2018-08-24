 const TABLES = require('./tables')

module.exports = {

  fetch_user: function(username) {
    return `SELECT * FROM ${TABLES.USUARIOS} WHERE username = '${username}'`
  },

  insert_new_user: function(id, username, senha, email) {
    return `INSERT INTO ${TABLES.USUARIOS}(id, username, senha, email, email_confirma) VALUES (${id}, '${username}', '${senha}', '${email}', false)`
  },

  insert_user_data: function(user_id, user_description, user_status, user_image) {
    return `INSERT INTO ${TABLES.INFO_USUARIOS}(Id_Usuario, nickname, Descricao_Usuario, Usuario_Status, Usuario_Imagem, skin) VALUES(${user_id}, '', '${user_description}', ${user_status}, '${user_image}', 0)`
  },

  get_user_data: function(id) {
    return `SELECT
    ${TABLES.USUARIOS}.Codigo, ${TABLES.USUARIOS}.id, ${TABLES.USUARIOS}.username, ${TABLES.INFO_USUARIOS}.nickname, ${TABLES.INFO_USUARIOS}.Codigo, ${TABLES.INFO_USUARIOS}.Descricao_Usuario, ${TABLES.INFO_USUARIOS}.Usuario_Status, ${TABLES.INFO_USUARIOS}.Usuario_Imagem,  ${TABLES.USUARIO_TAG}.Cenario_01, ${TABLES.USUARIO_TAG}.Cenario_02, ${TABLES.USUARIO_TAG}.Cenario_03, ${TABLES.USUARIO_TAG}.Cenario_04, ${TABLES.USUARIO_TAG}.Cenario_05,  ${TABLES.USUARIO_TAG}.Sistema_01, ${TABLES.USUARIO_TAG}.Sistema_02, ${TABLES.USUARIO_TAG}.Sistema_03, ${TABLES.USUARIO_TAG}.Sistema_04, ${TABLES.USUARIO_TAG}.Sistema_05, ${TABLES.USUARIO_NON_TAG}.Non_Cenario_01, ${TABLES.USUARIO_NON_TAG}.Non_Cenario_02, ${TABLES.USUARIO_NON_TAG}.Non_Cenario_03, ${TABLES.USUARIO_NON_TAG}.Non_Cenario_04, ${TABLES.USUARIO_NON_TAG}.Non_Cenario_05, ${TABLES.USUARIO_NON_TAG}.Non_Sistema_01, ${TABLES.USUARIO_NON_TAG}.Non_Sistema_02, ${TABLES.USUARIO_NON_TAG}.Non_Sistema_03, ${TABLES.USUARIO_NON_TAG}.Non_Sistema_04, ${TABLES.USUARIO_NON_TAG}.Non_Sistema_05
    FROM
    ${TABLES.USUARIOS}, ${TABLES.INFO_USUARIOS}, ${TABLES.USUARIO_TAG}, ${TABLES.USUARIO_NON_TAG}
    WHERE
    ${TABLES.USUARIOS}.id = ${id} AND ${TABLES.INFO_USUARIOS}.Id_Usuario = ${id} AND ${TABLES.USUARIO_TAG}.ID_Usuario = ${id} AND ${TABLES.USUARIO_NON_TAG}.ID_Usuario = ${id}`;
  },

  // get_user_data: function(id) {
  //   return `SELECT ${TABLES.USUARIOS}.Codigo, ${TABLES.USUARIOS}.id, ${TABLES.USUARIOS}.username, ${TABLES.INFO_USUARIOS}.nickname, ${TABLES.INFO_USUARIOS}.Codigo, ${TABLES.INFO_USUARIOS}.Descricao_Usuario, ${TABLES.INFO_USUARIOS}.Usuario_Status, ${TABLES.INFO_USUARIOS}.Usuario_Imagem FROM ${TABLES.USUARIOS}, ${TABLES.INFO_USUARIOS} WHERE ${TABLES.INFO_USUARIOS}.Id_Usuario = ${id} AND ${TABLES.USUARIOS}.id = ${id}`
  // },

  get_last_user_id: function() {
    return `SELECT id FROM ${TABLES.USUARIOS} ORDER BY id DESC LIMIT 1`
  },

  fetch_news: function() {
    return `SELECT * FROM ${TABLES.D_NOTICIAS}`;
  }
}
