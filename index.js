const express = require('express');
const server = express();
const port = 3000;
const livros = require('./src/data/livros.json');

server.get('/', (req,res) =>{
    return res.json(livros)
})

server.listen(port, () =>{
    console.log('Servidor está funcionando :)')
})