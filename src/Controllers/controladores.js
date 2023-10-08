const { filmes } = require('../DataBase/filmes')

const listaDeFilmes = (req, res) => {
    return res.status(200).json(filmes)
}

const consultarFilmeId = (req, res) => {
    const { id } = req.params

    const consultarFilme = filmes.find((filme) => {
        return filme.id === Number(id)
    })

    if (!consultarFilme) {
        return res.status(200).json({ mensagem: "Não existe filme para o ID informado." })
    }
    return res.status(201).json(consultarFilme)
}
let novoFilmeId = 3

const cadastrarFilme = (req, res) => {
    const { titulo, ano } = req.body
    const novoFilme = {
        id: novoFilmeId++,
        titulo,
        ano
    }
    filmes.push(novoFilme)
    return res.status(201).json(novoFilme)
}

const excluirFilme = (req, res) => {
    const { id } = req.params

    const excluirFilmes = filmes.find((filme) => {
        return filme.id === Number(id)
    })

    if (!excluirFilmes) {
        return res.status(200).json({ mensagem: "Não existe filme para o ID informado." })
    }

    return res.status(201).json({ mensagem: "Filme excluído com sucesso!" })
}


module.exports = {
    listaDeFilmes,
    consultarFilmeId,
    cadastrarFilme,
    excluirFilme
}