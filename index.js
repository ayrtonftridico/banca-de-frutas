const express = require ('express');

const server = express();

server.use(express.json());

const frutas = ['Maçã', 'Banana', 'Uva'];

// Retorna listagem de frutas
server.get('/frutas', (req, res) => {
    const { index } = req.params;

    return res.json(frutas);
});

// Retorna fruta em específico, de acordo com a posição no array
server.get('/frutas/:index', (req, res) => {
    const { index } = req.params;

    return res.json(frutas[index]);
});

// Adiciona uma nova fruta utilizando formato JSON
server.post('/frutas', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(frutas);
});

// Alterar o nome de uma fruta ja existente
server.put('/frutas/:index', (req, res) => {
    const { name } = req.body;
    const { index } = req.params;

    return res.json(frutas);
});

//Deletar uma fruta
server.delete('/frutas/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({ message: "O fruta foi deletada"});
});

// Porta utilizada no localhost
server.listen(3000); 