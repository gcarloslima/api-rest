// Também instalei o nodemon, para as atualizações no código refletirem em tempo real no servidor.

import express from "express"; // importar o express
const app = express(); // criar uma instância do express


// Definir a rota padrão ou raiz
app.get('/', (req, res) => {
    res.send("Hello World, Carlos!");
});

export default app;
