import ComFilho from "./ComFilho";

const ComPai = () => {
    function receberMensagemDoFilho(mensagem) {
        alert("Mensagem recebida, meu filho: " + mensagem);
    }

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
