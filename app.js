const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const url = 'mongodb+srv://leandrosuy:leandrosuy@filmes.ye0cy.mongodb.net/Filmes?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
})

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!');
})

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require('./Routes/index');

app.use('/', indexRoute);

app.listen((3333), () => {
    console.log('Servidor rodando...')
});

module.exports = app;