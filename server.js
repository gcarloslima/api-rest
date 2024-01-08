import app from "./src/app.js"; // importar app

const PORT = 3000; // definir a porta

// escutar as requisições para a porta 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando no endereço http:/localhost:${PORT}`);
});
