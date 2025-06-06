// Também instalei o nodemon, para as atualizações no código refletirem em tempo real no servidor.

import express from "express"; // importar o express
const app = express(); // criar uma instância do express
app.use(express.json()); // ler body com json


// mock
const livros = [
    { id: 1, titulo: "Clean Code: A Handbook of Agile Software Craftsmanship", dataPublicacao: "11 de agosto de 2008"},
    { id: 2, titulo: "Refactoring: Improving the Design of Existing Code (2nd Edition)", dataPublicacao: "30 de novembro de 2018"},
    { id: 3, titulo: "The Clean Coder: A Code of Conduct for Professional Programmers", dataPublicacao: "23 de maio de 2011" },
    { id: 4, titulo: "Domain-driven design: atacando as complexidades no coração do software", dataPublicacao: "16 de dezembro de 2016" },
    { id: 5, titulo: "Clean Architecture: A Craftsman's Guide to Software Structure and Design", dataPublicacao: "10 de setembro de 2017"},
    { id: 6, titulo: "Learning JavaScript Data Structures and Algorithms: Write complex and powerful JavaScript code using the latest ECMAScript, 3rd Edition", dataPublicacao: "30 de abril de 2018"}
];

// Buscar por ID
function buscarLivroPorID(id) {
    return livros.filter(livro => livro.id == id);
}

// Excluir por ID
// function excluirLivroPorID(id) {
//     // for (let i = 0; i < livros.length; i++) {
//     //     if (livros[i].id == id) {
//     //         livros.splice(livros.indexOf(livros[i]), 1);
//     //         break;
//     //     }
//     // }
//     livros.splice(livros.findIndex(livro => livro.id == id), 1);
//     return livros;
// }

// Retornar index por id

function indexPorID(id) {
    return livros.findIndex(livro => livro.id == id);
}

// Definir a rota padrão ou raiz
app.get('/', (req, res) => {
    res.send("Hello World, Carlos Rangel!");
});

// listar livros
app.get('/livros', (req, res) => {
    res.status(200).send(livros);
});

// listar pelo ID
app.get('/livros/:id', (req, res) => {
    console.log(req.params.id);
    res.json(buscarLivroPorID(req.params.id));
});

// excluir pelo ID
app.delete('/livros/:id', (req, res) => {
    livros.splice(indexPorID(req.params.id), 1);
    res.send("Livro excluído com sucesso!");
});

// editar pelo ID
app.put('/livros/:id', (req, res) => {
    let index = indexPorID(req.params.id);
    livros[index].titulo = req.body.titulo;
    livros[index].dataPublicacao = req.body.dataPublicacao;
    res.send("Livro editado com sucesso!");
});

// app.get('/livros/delete/:id', (req, res) => {
//     res.json(excluirLivroPorID(req.params.id));
// });


// adicionar livro ao JSON
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send("Seleção cadastrada com sucesso!");
});

export default app;
