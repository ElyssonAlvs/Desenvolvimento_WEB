import { useState } from "react";

const Estado = () => {

    let [contador, setContador] = useState(0)

    const incrementarContador = () => {
        setContador(contador => contador + 1)
    };


    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button
                onClick={() => {
                    incrementarContador();
                }}
            >
                Incremetar Contador!
            </button>
        </div>
    );
};

export default Estado;
