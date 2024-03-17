import { useContext } from "react";
import { PokemonContexto } from "./PokemonContext";
import PokemonDecrementar from "./PokemonDecrementar";
import PokemonIncrementar from "./PokemonIncrementar";

const PokemonImagem = () => {
    // Obtém o ID do Pokémon do contexto
    const {id} = useContext(PokemonContexto);
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    return (
        <div>
            {/* Exibe a imagem do Pokémon com o ID atual */}
            <img 
                src={url + id + ".png"}
                alt="Pokemon"
                width={150}
            />
            {/* Componentes para incrementar e decrementar o ID do Pokémon */}
            <PokemonIncrementar />
            <PokemonDecrementar />
        </div>
    );
}

export default PokemonImagem;
