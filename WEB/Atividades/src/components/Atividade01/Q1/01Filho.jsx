const Filho = ({ altura, peso }) => {
    
    const IMC = (altura, peso) => peso / (altura * altura);
    const imc = IMC(altura, peso);

    // Função para determinar a resposta com base no IMC calculado
    const resposta = (imc) => {
        if (imc < 18) return <h1>Abaixo do peso</h1>;
        else if (imc > 25) return <h1>Acima do peso</h1>;
        return <h1>Peso ideal</h1>;
    };

    return (
        <>
            <h1>IMC : {imc.toFixed(2)}</h1> {/* Exibe o IMC com duas casas decimais */}
            {resposta(imc)} {/* Exibe a resposta com base no IMC */}
        </>
    );
};

export default Filho;
