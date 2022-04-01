const express = require ('express');

const app = express();

app.use(express.json());

const frutas = ['Maçã', 'Banana', 'Uva'];

// Retorna listagem de frutas
app.get('/frutas', (req, res) => {
    const { index } = req.params;

    return res.json(frutas);
});

// Retorna fruta em específico, de acordo com a posição no array
app.get('/frutas/:index', (req, res) => {
    const { index } = req.params;

    return res.json(frutas[index]);
});

// Adiciona uma nova fruta utilizando formato JSON
app.post('/frutas', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(frutas);
});

// Alterar o nome de uma fruta ja existente
app.put('/frutas/:index', (req, res) => {
    const { name } = req.body;
    const { index } = req.params;

    return res.json(frutas);
});

//Deletar uma fruta
app.delete('/frutas/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({ message: "O fruta foi deletada"});
});

// Porta utilizada no localhost
app.listen(3000); 