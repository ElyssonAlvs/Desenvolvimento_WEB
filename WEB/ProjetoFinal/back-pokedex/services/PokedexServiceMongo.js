const { Pokedex, Pokemon } = require('../models/PokedexModelMongo');
const PokeApiService = require('./PokeApiService');
const mongoose = require('mongoose');

class PokedexService {

    // Retorna todas as Pokédex
    async getAllPokedex() {
        return await Pokedex.find().populate('pokemons');
    }

    // Retorna uma Pokédex por ID
    async getPokedexById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID");
        return await Pokedex.findById(id).populate('pokemons');
    }

    // Retorna todos os Pokémon de uma Pokédex por ID da Pokédex
    async getPokemonByPokedexId(pokedexId) {
        const pokedex = await Pokedex.findById(pokedexId).populate('pokemons');
        if (!pokedex) throw new Error("Pokedex not found");
        return pokedex.pokemons;
    }

    // Retorna todos os Pokémon de uma Pokédex, ordenados por nome
    async getPokemonByPokedexIdSortedByName(pokedexId) {
        const pokedex = await Pokedex.findById(pokedexId).populate({
            path: 'pokemons',
            options: { sort: { name: 1 } }
        });
        if (!pokedex) throw new Error("Pokedex not found");
        return pokedex.pokemons;
    }

    // Retorna Pokémon de uma Pokédex por nome
    async getPokemonByPokedexIdAndName(pokedexId, name) {
        const pokedex = await Pokedex.findById(pokedexId).populate('pokemons');
        if (!pokedex) throw new Error("Pokedex not found");
        return pokedex.pokemons.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase());
    }

    // Cria uma nova Pokédex
    async createPokedex(pokedexData) {
        const pokedex = new Pokedex(pokedexData);
        return await pokedex.save();
    }

    // Atualiza o nome da Pokédex
    async updatePokedexName(id, newName) {
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID");
        const pokedex = await Pokedex.findByIdAndUpdate(id, { name: newName }, { new: true });
        if (!pokedex) throw new Error("Pokedex not found");
        return pokedex;
    }

    // Deleta uma Pokédex por ID
    async deletePokedex(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID");
        await Pokedex.findByIdAndDelete(id);
    }

    // Adiciona um Pokémon à Pokédex
    async addPokemonToPokedex(pokedexId, pokemonName) {
        const pokemonJson = await PokeApiService.getPokemon(pokemonName);
        if (!pokemonJson || pokemonJson === "Pokemon not found") {
            throw new Error("Pokemon not found");
        }

        const pokemon = new Pokemon(pokemonJson);
        await pokemon.save();

        const pokedex = await Pokedex.findById(pokedexId);
        if (!pokedex) throw new Error("Pokedex not found");

        pokedex.pokemons.push(pokemon._id);
        await pokedex.save();

        return pokedex.populate('pokemons');
    }
}

module.exports = new PokedexService();
