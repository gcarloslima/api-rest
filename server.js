import app from "./src/app.js"; // importar app

const port = 3000; // definir a porta

// escutar as requisições para a porta 3000
app.listen(port, () => {
    console.log(`O servidor está rodando no endereço http:/localhost:${port}`);
});
