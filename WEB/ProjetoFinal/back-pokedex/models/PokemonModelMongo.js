const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stats: {
        type: Array,
        default: []
    },
    types: {
        type: Array,
        default: []
    },
    abilities: {
        type: Array,
        default: []
    },
    base_experience: {
        type: Number
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    }
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
