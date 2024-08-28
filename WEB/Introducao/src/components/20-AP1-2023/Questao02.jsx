import { useState } from "react"

const Pikachu = () => {
    // MUDAR O ESTADO DO PIKACHU (1)
    const [virar, setVirar] = useState(true)

    // LADOS DA IMAGEM DO PIKACHU (2)
    const imagemFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    const imagemCostas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";

    // FUNÇÃO PARA VIRAR A IMAGEM DO PIKACHU (3)
    const virarImagem = () => { setVirar(!virar) }

    return (
        <div>
            <h1>Pikachu</h1>
            <img src={virar ? imagemCostas : imagemFrente} alt="Pikachu" onClick={virarImagem} />
            <button onClick={virarImagem}>Virar</button>
        </div>
    )


}

export default Pikachu