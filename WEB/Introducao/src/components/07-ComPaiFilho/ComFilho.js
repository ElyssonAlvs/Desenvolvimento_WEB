const ComFilho = ({ mensagem, enviarMensagemParaOPai }) => {
    // Renderização do componente filho
    return (
        <>
            {/* Exibe a mensagem recebida do pai */}
            <h1>Mensagem do pai : {mensagem}</h1>
            {/* Botão para enviar mensagem para o Pai */}
            <button
                onClick={() => {
                    // Chama a função para enviar mensagem para o pai com uma nova mensagem
                    enviarMensagemParaOPai("Oi pai, tudo bom?");
                }}
            >
                Enviar mensagem para o Pai
            </button>
        </>
    );
};

export default ComFilho;
