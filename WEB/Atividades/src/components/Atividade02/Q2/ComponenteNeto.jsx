import { useContext } from "react"
import ComponenteFilho from "./ComponenteFilho"
import PokemonContexto from "./MyContext"

const ComponenteNeto = () => {

    const numero = useContext(PokemonContexto)

    return (
        <div>
            <h1>Componente Neto</h1>
            <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+1}.png`}
                    width="480px"
                    alt={`Pokemon número ${numero}`}
                />
            <ComponenteFilho />
        </div>
    )
}

export default ComponenteNeto