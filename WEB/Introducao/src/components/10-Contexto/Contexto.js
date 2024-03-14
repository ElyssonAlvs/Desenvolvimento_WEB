//CONTEXTO
import { Variavel } from "./VariavelContext"; // Importa o contexto Variavel do arquivo VariavelContext.js
import { useContext } from "react"; // Importa o hook useContext do React

// Componente CompA
const CompA = () => {
    const variavelDeA = { nome: "Jefferson", curso: "SI" }; // Define um objeto com os dados a serem compartilhados

    return (
        <div>
            <Variavel.Provider value={variavelDeA}> {/* Fornecer o contexto e valor para os componentes filhos */}
                <CompB />
                <CompC />
            </Variavel.Provider>
        </div>
    );
};

// Componente CompB
const CompB = () => {
    const { nome, curso } = useContext(Variavel); // Obtém os valores do contexto Variavel

    return (
        <div>
            <h3>B: {nome}, {curso}</h3> {/* Exibe os valores obtidos do contexto */}
        </div>
    );
};

// Componente CompC
const CompC = () => {
    return (
        <div>
            <CompD />
        </div>
    );
};

// Componente CompD
const CompD = () => {
    return (
        <div>
            <CompE />
        </div>
    );
};

// Componente CompE
const CompE = () => {
    const { curso } = useContext(Variavel); // Obtém o valor do curso do contexto Variavel

    return (
        <div>
            <h3>E: {curso}</h3> {/* Exibe o valor do curso obtido do contexto */}
        </div>
    );
};

export { CompA, CompB, CompC, CompD, CompE }; // Exporta os componentes para uso em outros arquivos
