import { useState } from "react"

const Charizard = () => {
    // mudar o estado da imagem do Charizard
    const [virar, setVirar] = useState(false)

    // frente e costas da imagem do Charizard
    const imagemFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png";
    const imagemCostas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png";

    // função para virar a imagem do Charizard
    const virarImagem = () => { setVirar(!virar) }

    return (
        <div>
            <h1>Charizard</h1>
            {/* Operador Ternário para virar a imagem do Charizard  */}
            <img src={virar ? imagemCostas : imagemFrente} alt="Charizard" onClick={virarImagem} />
            <button onClick={virarImagem}>Virar</button>
        </div>
    )


}

export default Charizard