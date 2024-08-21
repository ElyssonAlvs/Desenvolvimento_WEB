import { useState, useEffect } from "react";

// Componente funcional Efeito
const Efeito = () => {
    // Declara dois estados: 'contador' e 'ehPar'
    // 'contador' é inicializado com 0 e 'ehPar' com true
    const [contador, setContador] = useState(0);
    const [ehPar, setEhPar] = useState(true);

    // useEffect é usado para realizar efeitos colaterais, neste caso,
    // para verificar se o contador é par ou ímpar toda vez que 'contador' mudar.
    useEffect(() => {
        // Verifica se 'contador' é par
        if (contador % 2 === 0) setEhPar(true);
        // Caso contrário, é ímpar
        else setEhPar(false);
    }, [contador]); // 'contador' é a dependência, o efeito é executado toda vez que 'contador' mudar

    // Renderiza o componente
    return (
        <div>
            {/* Exibe o valor atual de 'contador' */}
            <h2>Contador : {contador}</h2>
            {/* Exibe se 'contador' é par ou ímpar */}
            <h3> {contador} é par ? {ehPar + ""}</h3>
            {/* Botão que incrementa 'contador' ao ser clicado */}
            <button onClick={() => setContador((Anterior) => contador + 1)}>
                Aumentar!
            </button>
        </div>
    );
};

// Exporta o componente para ser usado em outras partes da aplicação
export default Efeito;
