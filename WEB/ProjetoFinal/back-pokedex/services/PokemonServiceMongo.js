const { Pokemon } = require('../models/PokemonModelMongo'); // Importando o modelo de Pokémon

class PokemonService {

    // Retorna um Pokémon por nome
    // Exemplo de método getPokemonByName em PokemonServiceMongo.js
    async getPokemonByName(name) {
        try {
            const pokemon = await Pokemon.findOne({ name: name.toLowerCase() });
            if (!pokemon) {
                throw new Error('Pokémon não encontrado');
            }
            return pokemon;
        } catch (error) {
            throw new Error('Erro ao buscar Pokémon: ' + error.message);
        }
    }


    // Retorna todos os Pokémons
    async getAllPokemons() {
        try {
            return await Pokemon.find();
        } catch (error) {
            console.error(error.stack); // Loga o stack trace completo para depuração
            throw new Error('Erro ao buscar Pokémons: ' + error.message);
        }
    }

    // Busca um Pokémon por ID
    async getPokemonById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('ID inválido');
        }
        try {
            const pokemon = await Pokemon.findById(id);
            if (!pokemon) {
                throw new Error('Pokémon não encontrado');
            }
            return pokemon;
        } catch (error) {
            throw new Error('Erro ao buscar Pokémon: ' + error.message);
        }
    }

    // Cria um novo Pokémon
    async createPokemon(pokemonData) {
        if (!pokemonData.name || !pokemonData.stats || !pokemonData.types) {
            throw new Error('Dados incompletos para criar o Pokémon');
        }
        try {
            const pokemon = new Pokemon(pokemonData);
            return await pokemon.save();
        } catch (error) {
            throw new Error('Erro ao criar Pokémon: ' + error.message);
        }
    }

    // Deleta um Pokémon por ID
    async deletePokemon(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('ID inválido');
        }
        try {
            const deletedPokemon = await Pokemon.findByIdAndDelete(id);
            if (!deletedPokemon) {
                throw new Error('Pokémon não encontrado');
            }
            return { message: 'Pokémon deletado com sucesso' };
        } catch (error) {
            throw new Error('Erro ao deletar Pokémon: ' + error.message);
        }
    }
    // Atualiza um Pokémon por ID
    async updatePokemon(id, pokemonData) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('ID inválido');
        }
        try {
            const updatedPokemon = await Pokemon.findByIdAndUpdate(id, pokemonData, { new: true });
            if (!updatedPokemon) {
                throw new Error('Pokémon não encontrado');
            }
            return updatedPokemon;
        } catch (error) {
            throw new Error('Erro ao atualizar Pokémon: ' + error.message);
        }
    }

}

module.exports = new PokemonService();
