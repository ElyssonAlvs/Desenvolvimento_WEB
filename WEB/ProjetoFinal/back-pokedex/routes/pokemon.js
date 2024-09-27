var express = require('express');
var router = express.Router();
const pokemonService = require('../services/PokemonServiceMongo');

// GET - Retorna um Pokémon por nome
router.get('/name/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const pokemon = await pokemonService.getPokemonByName(name);
    if (!pokemon) {
      return res.status(404).json({ message: 'Pokémon não encontrado' });
    }
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar Pokémon', error: error.message });
  }
});

// GET - Retorna todos os Pokémons
router.get('/', async (req, res) => {
  try {
    const pokemons = await pokemonService.getAllPokemons();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET - Retorna um Pokémon por ID
router.get('/:id', async (req, res) => {
  try {
    const pokemon = await pokemonService.getPokemonById(req.params.id);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// POST - Cria um novo Pokémon
router.post('/', async (req, res) => {
  try {
    const newPokemon = await pokemonService.createPokemon(req.body);
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - Deleta um Pokémon por ID
router.delete('/:id', async (req, res) => {
  try {
    await pokemonService.deletePokemon(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
