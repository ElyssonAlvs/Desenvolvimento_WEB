import { useState } from "react";

const Pokemon = () => {
    let url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    const [contador, setContador] = useState(1);

    let url_master = url + contador + ".png";

    const incrementarContador = () => {
        setContador((contador) => contador + 1);
    };

    const decrementarContador = () => {
        if (contador - 1 <= 0) return;
        setContador((contador) => {
            return contador - 1;
        });
    };

    return (
        <div>
            <h2>ID: {contador}</h2>
            <img
                // src+{url+"20.png"}
                src={url_master}
                alt="Pokemon"
                width={200}
            />
            <br />
            <button
                onClick={() => {
                    incrementarContador();
                }}
            >
                Incremetar Contador para ver o próximo Pokemon!
            </button>
            <br />
            <button onClick={decrementarContador}>
                Decrementar Contador para ver o Pokemon que já passou!
            </button>
        </div>
    );
};

export default Pokemon;
