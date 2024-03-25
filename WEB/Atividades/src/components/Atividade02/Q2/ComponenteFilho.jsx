import { useContext } from "react"
import PokemonContexto from "./MyContext"

const ComponenteFilho = () => {

    const numero = useContext(PokemonContexto)

    return(
        <div>
            <h1>Componente Filho</h1>
            <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+2}.png`}
                    width="480px"
                    alt={`Pokemon número ${numero}`}
                />
        </div>
    )
}

export default ComponenteFilho