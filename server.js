const jsonServer = require('json-server');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Configurações obrigatórias para o Render
app.use(middlewares);
app.use(express.static(path.join(__dirname, 'public'))); // Serve o seu front-end
app.use('/api', router); // Suas rotas de API começam com /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});