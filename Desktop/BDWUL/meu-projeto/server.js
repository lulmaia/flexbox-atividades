const express = require('express');
const bodyParser = require('body-parser');
const albumRoutes = require('./routes/albumRoutes');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Usando as rotas de álbum
app.use('/albums', albumRoutes);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
