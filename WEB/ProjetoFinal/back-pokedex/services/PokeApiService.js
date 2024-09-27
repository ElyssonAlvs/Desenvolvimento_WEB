const axios = require('axios');
const Pokemon = require('../models/PokemonModelMongo');


const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemon = async (name) => {
  const url = `${POKE_API_URL}${name.toLowerCase()}`;
  try {
    // Busca o Pokémon na API externa
    const response = await axios.get(url);
    const data = response.data;

    // Verifica se o Pokémon já está salvo no banco de dados
    let pokemon = await Pokemon.findOne({ name: data.name });

    if (!pokemon) {
      // Se não estiver no banco, cria um novo documento no MongoDB
      pokemon = new Pokemon({
        name: data.name,
        stats: data.stats,
        types: data.types.map(typeInfo => typeInfo.type.name),
        abilities: data.abilities.map(abilityInfo => abilityInfo.ability.name),
        base_experience: data.base_experience,
        height: data.height,
        weight: data.weight
      });

      await pokemon.save(); // Salva no MongoDB
    }

    return pokemon; // Retorna o Pokémon (seja do banco ou novo)
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { error: 'Pokemon not found' };
    }
    throw new Error('Error fetching Pokemon');
  }
};

module.exports = { getPokemon };
