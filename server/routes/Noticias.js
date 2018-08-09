const QUERIES = require('../config/queries');

const express = require('express');
const router = express.Router();

const db = require('../db/db');

router.get('/', (req, res) => {
  const news = [ ...Array() ];
  db.connect();
  db.query(QUERIES.FETCH_NEWS(), data => {
    data.forEach(n => news.push(n));
    res.json(news);
  })
});

module.exports = router;
