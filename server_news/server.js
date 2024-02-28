// Importar as dependências necessárias
const express = require('express');
const articlesRouter = require('../routes/articles');

// Inicializar o Express
const app = express();
const port = 4000;

// Usar as rotas definidas no arquivo articles.js
app.use('/articles', articlesRouter);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em :${port}`);
});
