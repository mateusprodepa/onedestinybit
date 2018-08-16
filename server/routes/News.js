// ROTA PARA TRATAR A ENDPOINT DAS NOTICIAS
// SIMPLES, FÁCIL, AESTHETICS . . .

//
// IMPORTAÇÃO DAS QUERIES DE DENTRO DA PASTA DE CONFIGURAÇÃO
//
const queries = require('../config/queries');

// CONFIG PADRÃO DO EXPRESS ROUTER !
const express = require('express');
const router = express.Router();

// IMPORTANDO MEU FRAMEWORKZINHO
const db = require('../db/db');

// DEFININDO O QUE VAI ACONTECER QUANDO FIZEREM
// UMA REQUISIÇÃO GET PRA CÁ . . .

router.get('/', (req, res) => {
  const news = new Array();

  db.connect();
  db.query(queries.fetch_news(),
  data => {
    data.forEach(n => news.push(n));
    res.json(news);
  })
});

module.exports = router;
