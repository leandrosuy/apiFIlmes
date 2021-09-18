const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmesSchema = new Schema({
    id: { type: Number, require: true, unique: true},
    nome: { type: String, require: true},
    capa: { type: String, require: true},
    descricao: { type: String, require: true}
});

module.exports = mongoose.model('Filmes', FilmesSchema);