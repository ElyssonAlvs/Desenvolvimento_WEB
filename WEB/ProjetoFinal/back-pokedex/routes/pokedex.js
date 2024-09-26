// controllers/pokedexController.js
const express = require('express');
const router = express.Router();
const pokedexService = require('../services/PokedexServiceMongo');

router.get('/', async (req, res) => {
    const pokedexList = await pokedexService.getAllPokedex();
    res.json(pokedexList);
});

router.get('/:id', async (req, res) => {
    const pokedex = await pokedexService.getPokedexById(req.params.id);
    res.json(pokedex);
});

router.get('/:pokedexId/pokemon', async (req, res) => {
    const pokemons = await pokedexService.getPokemonByPokedexId(req.params.pokedexId);
    res.json(pokemons);
});

router.get('/:pokedexId/pokemon/sorted', async (req, res) => {
    const sortedPokemons = await pokedexService.getPokemonByPokedexIdSortedByName(req.params.pokedexId);
    res.json(sortedPokemons);
});

router.get('/:pokedexId/pokemon/name/:name', async (req, res) => {
    const pokemons = await pokedexService.getPokemonByPokedexIdAndName(req.params.pokedexId, req.params.name);
    res.json(pokemons);
});

router.post('/', async (req, res) => {
    const pokedex = await pokedexService.createPokedex(req.body);
    res.status(201).json(pokedex);
});

router.put('/:id', async (req, res) => {
    const updatedPokedex = await pokedexService.updatePokedexName(req.params.id, req.body.name);
    res.json(updatedPokedex);
});

router.delete('/:id', async (req, res) => {
    await pokedexService.deletePokedex(req.params.id);
    res.status(204).send();
});

router.post('/:pokedexId/pokemon', async (req, res) => {
    const pokedex = await pokedexService.addPokemonToPokedex(req.params.pokedexId, req.body);
    res.status(201).json(pokedex);
});

module.exports = router;
