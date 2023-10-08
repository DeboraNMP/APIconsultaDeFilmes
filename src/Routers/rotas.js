const express = require('express')
const rotas = express();

const controladores = require('../Controllers/controladores')

rotas.get('/filmes', controladores.listaDeFilmes)
rotas.get('/filmes/:id', controladores.consultarFilmeId)
rotas.post('/filmes', controladores.cadastrarFilme)
rotas.delete('/filmes/:id', controladores.excluirFilme)

module.exports = rotas