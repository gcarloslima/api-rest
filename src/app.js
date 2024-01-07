// Também instalei o nodemon, para as atualizações no código refletirem em tempo real no servidor.

const express = require("express"); // importar o express
const app = express(); // criar uma instância do express
const port = 3000; // definir a porta

// Definir a rota padrão ou raiz
app.get('/', (req, res) => {
    res.send("Hello World, Carlos!");
});

// escutar as requisições para a porta 3000
app.listen(port, () => {
    console.log(`O servidor está rodando no endereço http:/localhost:${port}`);
});
