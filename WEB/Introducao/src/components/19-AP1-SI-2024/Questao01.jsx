import React from 'react';

// Questao01A utilizando arrow function
const Questao01A = () => {

    // Lista a ser passada via props para o componente Questao01B
    const lista = [
        { a: 10, b: 3, c: 7 },
        { a: 5, b: -3, c: 9 },
        { a: 1, b: 9, c: 40 }
    ];

    // JSX que renderiza o componente Questao01B e passa a os números como props
    return (
        <div>
            <Questao01B lista={lista} />
        </div>
    );
}

// Questao01B utilizando a função clássica (function)
function Questao01B(props) {

    // Acessa a lista recebida via props e pelo map para encontrar o maior número em cada objeto
    const maiores = props.lista.map((lista, index) => {
        return (
            <div key={index}>
                <p>Objeto {index + 1}: {JSON.stringify(lista)}</p>
                {/* Uso do math.max para encontrar o maior valor */}
                <p>Maior valor do objeto na linha {index + 1}: {Math.max(lista.a, lista.b, lista.c)}</p>
            </div>
        );
    });

    // JSX que renderiza os maiores números encontrados
    return (
        <div>
            <h1>Questão 01</h1>
            <h2>Maiores Números da Lista</h2>
            {maiores}
        </div>
    );
}

export default Questao01A