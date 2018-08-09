// IMPORTAÇÕES, ETC, ETC...
const express = require('express');
const bodyParser = require('body-parser');

// VARIÁVEIS DE AMBIENTE
const app = express();
const port = process.env.PORT || 5000;

// ENDPOINTS DA NOSSA API >>
const onedestiny_news = require('./routes/Noticias');

// DEFININDO OS MIDDLEWARES QUE NOSSO APP EXPRESS VAI USAR WOW..
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// FAZENDO USO DAS ROTAS QUE IMPORTAMOS LÁ EM CIMA BROTHER
app.use('/api/oneDestinyNews', onedestiny_news);

app.listen(port, () => console.info(`Servidor rodando na porta ${port}`));
