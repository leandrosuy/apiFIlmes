const express = require('express');
const router = express.Router();
const Users = require('../model/filmes')

//  Rota de GET
router.get('/filmes', (req, res) => {
    Users.find({}, (err, data) => {
        if(err) return res.send({ message: 'Erro na consulta dos filmes'});
        return res.send(data);
    });
});

//  Rota de Post
router.post('/criarfilme', (req, res) => {
    const {id, nome, capa, descricao} = req.body;
    if(!id || !nome || !capa || !descricao) return res.send({ error: "Dados insuficientes!" });

    Users.findOne({ id }, (err, data) => {
        if(err) return res.send({ error: "Erro ao buscar filmes"});
        if(data) return res.send({ error: "Filme já cadastrado"});

        Users.create(req.body, (err, data) => {
            if(err) return res.send({ error: "Erro ao criar Filme!"});
            return res.send(data);
        });
    });
});

module.exports = router;