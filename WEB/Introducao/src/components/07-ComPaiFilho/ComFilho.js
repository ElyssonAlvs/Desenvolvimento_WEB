const ComFilho = ({ mensagem, enviarMensagemParaOPai }) => {
    return (
        <>
            <h1>Mensagem do pai : {mensagem}</h1>
            <button
                onClick={() => {
                    enviarMensagemParaOPai("Oi pai, tudo bom?");
                }}
            >
                Enviar mensagem para o Pai
            </button>
        </>
    );
};

export default ComFilho;
