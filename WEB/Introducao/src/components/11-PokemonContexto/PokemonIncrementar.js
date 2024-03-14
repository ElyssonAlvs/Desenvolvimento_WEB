import { useContext } from "react"
import { PokemonContexto } from "./PokemonContext"

// Componente de botão para incrementar o ID do Pokémon
const PokemonIncrementar = () => {
    const {setId} = useContext(PokemonContexto);

    return (
        <div>
            <button
                onClick={() => {
                    setId((anterior) => anterior + 1);
                }}
            >
                Incrementar
            </button>
        </div>
    );
}

export default PokemonIncrementar;