// Importar as dependências necessárias
const express = require('express');
const axios = require('axios'); // Importar o axios

// Inicializar as rotas do Express
const router = express.Router();

// Definir rota para buscar artigos por palavra-chave
router.get('/search', async (req, res) => {
    try {
        const { keyword } = req.query;
        const apiUrl = `https://newsapi.org/v2/everything?language=pt&apiKey=13ea94ec5309407fb93ae68f087c1253&q=${encodeURIComponent(keyword)}`;

        // Usar o axios para fazer a requisição HTTP
        const response = await axios.get(apiUrl);
        const data = response.data;
        
        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar artigos:', error);
        res.status(500).json({ error: 'Erro ao buscar artigos' });
    }
});

// Exportar as rotas
module.exports = router;
