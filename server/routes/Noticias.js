// ROTA PARA TRATAR A ENDPOINT DAS NOTICIAS
// SIMPLES, FÁCIL, AESTHETICS . . .

//
// IMPORTAÇÃO DAS QUERIES DE DENTRO DA PASTA DE CONFIGURAÇÃ
//
//
const QUERIES = require('../config/queries');

// CONFIG PADRÃO DO EXPRESS ROUTER !
const express = require('express');
const router = express.Router();

// IMPORTANDO MEU FRAMEWORKZINHO
const db = require('../db/db');

// DEFININDO O QUE VAI ACONTECER QUANDO FIZEREM
// UMA REQUISIÇÃO GET PRA CÁ . . .

router.get('/', (req, res) => {
  const news = [ ...Array() ];

  db.connect();
  db.query(QUERIES.FETCH_NEWS(),
  data => {
    data.forEach(n => news.push(n));
    res.json(news);
  })
});

module.exports = router;

// [
//     {
//         "Codigo": 1,
//         "Titulo": "Despacito 2 confimado!",
//         "Imagem": "https://i.ytimg.com/vi/lmhtqOP7zok/maxresdefault.jpg",
//         "Descricao": "Despacito 2 acaba de ser confirmado, cantores se desesperam !"
//     },
//     {
//         "Codigo": 2,
//         "Titulo": "Aaaaaaaaaa",
//         "Imagem": "https://i.imgur.com/YiGO7dX.jpg",
//         "Descricao": "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
//     },
//     {
//         "Codigo": 3,
//         "Titulo": "Entortando a barra no modo turbo!",
//         "Imagem": "https://i.ytimg.com/vi/6NlTSQNwOHQ/hqdefault.jpg",
//         "Descricao": "MUITO PUTO MEU"
//     }
// ]
