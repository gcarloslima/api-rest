// Também instalei o nodemon, para as atualizações no código refletirem em tempo real no servidor.

import express from "express"; // importar o express
const app = express(); // criar uma instância do express


// mock
const livros = [
    { id: 1, titulo: "Clean Code: A Handbook of Agile Software Craftsmanship", dataPublicacao: "11 de agosto de 2008"},
    { id: 2, titulo: "Refactoring: Improving the Design of Existing Code (2nd Edition)", dataPublicacao: "30 de novembro de 2018"},
    { id: 3, titulo: "The Clean Coder: A Code of Conduct for Professional Programmers", dataPublicacao: "23 de maio de 2011" },
    { id: 4, titulo: "Domain-driven design: atacando as complexidades no coração do software", dataPublicacao: "16 de dezembro de 2016" },
    { id: 5, titulo: "Clean Architecture: A Craftsman's Guide to Software Structure and Design", dataPublicacao: "10 de setembro de 2017"},
    { id: 6, titulo: "Learning JavaScript Data Structures and Algorithms: Write complex and powerful JavaScript code using the latest ECMAScript, 3rd Edition", dataPublicacao: "30 de abril de 2018"}
];


// Definir a rota padrão ou raiz
app.get('/', (req, res) => {
    res.send("Hello World, Carlos Rangel!");
});

app.get('/livros', (req, res) => {
    res.status(200).send(livros);
});



export default app;
