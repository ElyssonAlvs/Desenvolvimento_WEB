import { useState } from "react";

const Pokemon = () => {
    // URL base para imagens de Pokémon
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    // Define um estado 'contador' inicializado como 1
    const [contador, setContador] = useState(1);

    // URL completa da imagem do Pokémon com base no contador
    let url_master = url + contador + ".png";

    // Função para incrementar o contador
    const incrementarContador = () => {
        setContador((contador) => contador + 1);
    };

    // Função para decrementar o contador
    const decrementarContador = () => {
        // Verifica se o contador não é menor que 1
        if (contador - 1 <= 0) return;
        setContador((contador) => {
            return contador - 1;
        });
    };

    return (
        <div>
            {/* Exibe o ID do Pokémon */}
            <h2>ID: {contador}</h2>
            {/* Exibe a imagem do Pokémon */}
            <img
                src={url_master}
                alt="Pokemon"
                width={200}
            />
            <br />
            {/* Botão para incrementar o contador e ver o próximo Pokémon */}
            <button
                onClick={() => {
                    incrementarContador();
                }}
            >
                Incrementar Contador para ver o próximo Pokemon!
            </button>
            <br />
            {/* Botão para decrementar o contador e ver o Pokémon anterior */}
            <button onClick={decrementarContador}>
                Decrementar Contador para ver o Pokemon que já passou!
            </button>
        </div>
    );
};

export default Pokemon;
