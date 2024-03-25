import { useState, useEffect } from "react";

const Efeito = () => {
    const [contador, setContador] = useState(0);
    const [ehPar, setEhPar] = useState(true);

    useEffect(() => {
        if (contador % 2 === 0) setEhPar(true);
        else setEhPar(false);
    }, [contador]);

    return (
        <div>
            <h2>Contador : {contador}</h2>
            <h3> {contador} é par ? {ehPar + ""}</h3>
            <button onClick={() => setContador((Anterior) => contador + 1)}>
                Aumentar!
            </button>
        </div>
    );
};

export default Efeito;
