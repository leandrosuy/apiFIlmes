const express = require('express');
const router = express.Router();
const Filmes = require('../model/filmes')

//  Rota de GET
router.get('/filmes', (req, res) => {
    Filmes.find({}, (err, data) => {
        if(err) return res.send({ message: 'Erro na consulta dos filmes'});
        return res.send(data);
    });
});

//  Rota de Post
router.post('/criarfilme', (req, res) => {
    const {id, nome, capa, descricao} = req.body;
    if(!id || !nome || !capa || !descricao) return res.send({ error: "Dados insuficientes!" });

    Filmes.findOne({ id }, (err, data) => {
        if(err) return res.send({ error: "Erro ao buscar filmes"});
        if(data) return res.send({ error: "Filme já cadastrado"});

        Filmes.create(req.body, (err, data) => {
            if(err) return res.send({ error: "Erro ao criar Filme!"});
            return res.send(data);
        });
    });
});

router.delete('/excluirfilme/:id', (req, res) => {
    const filme = Filmes.deleteOne({_id: req.params.id}, (err) => {
        if(err) return res.send({ error: "Erro ao excluir o Filme!" })
    });
    return res.send({ message: 'Filme excluido com sucesso!'})
})

module.exports = router;