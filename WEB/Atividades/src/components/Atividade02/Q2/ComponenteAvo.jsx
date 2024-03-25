import ComponenteNeto from "./ComponenteNeto"
import PokemonContexto from "./MyContext"


const ComponenteAvo = () => {

    const numero = 1

    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Componente Avô</h1>
                <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    width="480px"
                    alt={`Pokemon número ${numero}`}
                />
                <ComponenteNeto/>
            </div>
        </PokemonContexto.Provider>
    )
}

export default ComponenteAvo