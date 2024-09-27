import axios from "axios";

const url = "http://localhost:3003";

class PokemonService {
  getPokemon(pokedexId) {
    return axios.get(url + "/pokemons/" + pokedexId + "/pokemon");
  }
}
export default PokemonService
