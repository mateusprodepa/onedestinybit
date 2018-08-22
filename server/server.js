// IMPORTAÇÕES, ETC, ETC...
const express = require('express');
const bodyParser = require('body-parser');

// VARIÁVEIS DE AMBIENTE
const app = express();
const port = process.env.PORT || 2500;

// ENDPOINTS DA NOSSA API >>
const onedestiny_news = require('./routes/News');
const onedestiny_auth = require('./routes/Auth')
const onedestiny_register = require('./routes/Register')
const onedestiny_userData = require('./routes/UserData')


// DEFININDO OS MIDDLEWARES QUE NOSSO APP EXPRESS VAI USAR WOW..
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// FAZENDO USO DAS ROTAS QUE IMPORTAMOS LÁ EM CIMA BROTHER
app.use('/api/oneDestinyNews', onedestiny_news);
app.use('/api/oneDestinyLogin', onedestiny_auth)
app.use('/api/oneDestinyRegister', onedestiny_register)
app.use('/api/oneDestinyProfile', onedestiny_userData)

app.listen(port, () => console.info(`Servidor rodando na porta ${port}`));
