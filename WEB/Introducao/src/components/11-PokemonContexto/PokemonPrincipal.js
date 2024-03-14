import { useState } from "react";
import PokemonImagem from "./PokemonImagem";
import { PokemonContexto } from "./PokemonContext";

const PokemonPrincipal = () => {
    // Define o estado inicial do ID do Pokémon
    const [id, setId] = useState(1);

    return (
        <div>
           <h3>Pokemon!</h3>
           {/* Fornece o contexto com o ID do Pokémon e a função para alterá-lo */}
           <PokemonContexto.Provider value={ {id, setId} }>
                <PokemonImagem />
           </PokemonContexto.Provider>
        </div>
    );
}

export default PokemonPrincipal;
