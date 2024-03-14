import { useState } from "react";

const Estado = () => {
    // Define um estado 'contador' inicializado como 0
    let [contador, setContador] = useState(0);

    // Função para incrementar o contador
    const incrementarContador = () => {
        setContador(contador => contador + 1);
    };

    return (
        <div>
            {/* Exibe o valor do contador */}
            <h2>Contador: {contador}</h2>
            {/* Botão para incrementar o contador */}
            <button
                onClick={() => {
                    incrementarContador();
                }}
            >
                Incrementar Contador!
            </button>
        </div>
    );
};

export default Estado;
