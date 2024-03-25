import { useState } from "react"
import PokemonContexto from "./MyContext"
import ComponenteNeto from "./ComponenteNeto"


const ComponenteAvo = () => {

    const [numero, setNumero] = useState(1)

    const acaoBotao = () => {
        setNumero(numero + 1)
    }

    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Componente Avô</h1>
                <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    style={{width:"400px"}}
                    alt={`Pokemon número ${numero}`}
                />
                <button
                    onClick={acaoBotao}
                >
                    Aumentar Número
                </button>
                <ComponenteNeto />
            </div>
        </PokemonContexto.Provider>
    )
}

export default ComponenteAvo