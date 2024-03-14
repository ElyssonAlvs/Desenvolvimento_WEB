import ComFilho from "./ComFilho";

const ComPai = () => {
    // Função para receber mensagem do filho
    function receberMensagemDoFilho(mensagem) {
        // Exibe um alerta com a mensagem recebida do filho
        alert("Mensagem recebida, meu filho: " + mensagem);
    }

    // Renderização do componente ComFilho  
    return (
        <>
            <ComFilho
                mensagem="Oi filho"
                enviarMensagemParaOPai={receberMensagemDoFilho}
            />
        </>
    );
};

export default ComPai;
