const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokedexSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pokemons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pokemon'
    }]
});

const Pokedex = mongoose.model('Pokedex', PokedexSchema);
module.exports = Pokedex;