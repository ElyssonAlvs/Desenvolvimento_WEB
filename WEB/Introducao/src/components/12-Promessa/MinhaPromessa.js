import { useEffect, useState } from "react";

const MinhaPromessa = new Promise((resolve, rejected) => {
    // computação em x segundos,...
    setTimeout(() => {
        const meuNumero = Math.floor(Math.random() * 10) + 1;
        if (meuNumero % 2 === 0)
            resolve("Deu tudo certo, seu número é " + meuNumero);
        else rejected("Deu tudo errado, seu número é : " + meuNumero);
    }, 5000);
}); // Promise

const ComponentePromessa = () => {
    const [resultado, setResultado] = useState();

    useEffect(() => {
        MinhaPromessa.then((valor) => {
            // console.log("OK :" + valor)
            setResultado(valor);
        }).catch((error) => setResultado(error));
    }, []);

    return (
        <>
            <h3>Promessa!</h3>
            <h2>Resultado : {resultado}</h2>
        </>
    );
};

export default ComponentePromessa;
