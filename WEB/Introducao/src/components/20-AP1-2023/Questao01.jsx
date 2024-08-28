import { useState, useEffect } from "react"

const Questao01A = () => {

    // ESTADOS PARA ARMAZENAR AS MÉDIAS DOS ALUNOS E O STATUS DE CARREGAMENTO (2)
    const [medias, setMedias] = useState([])
    const [loading, setLoading] = useState(true)

    // FUNÇÃO PARA RECEBER AS MÉDIAS CALCULADAS E ATUALIZAR O ESTADO (4)
    const receberMedias = (mediasCalculadas) => {
        setMedias(mediasCalculadas)
        setLoading(false)
    }

    // FUNÇÃO PARA RENDERIZAR OS ALUNOS COM MÉDIA MAIOR OU IGUAL A 6.0 (5)
    const renderizarAlunos = () => {
        return medias.map((media, index) => {
            if (media >= 6.0) {
                return <li key={index}>{alunos[index].nome}</li>
            }
            return null
        })
    }

    // ARRAY DE ALUNOS (1)
    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
        { nome: "Ciclano", notas: { ap1: 8.0, ap2: 6.0 } },
    ]

    // RETORNO DO COMPONENTE (6)
    return (
        <div>
            <h1>Questão 01</h1>
            <Questao01B alunos={alunos} enviarMedias={receberMedias} />
            {!loading && (
                <div>
                    <h2>Alunos com média maior ou igual a 6.0:</h2>
                    <ul>{renderizarAlunos()}</ul>
                </div>
            )}
        </div>
    )
}
function Questao01B(props) {
    // FUNÇÃO PARA CALCULAR AS MÉDIAS DOS ALUNOS POR MEIO DO MAP (3)
    useEffect(() => {
        const mediasCalculadas = props.alunos.map(
            (aluno) => (aluno.notas.ap1 + aluno.notas.ap2) / 2
        )
        props.enviarMedias(mediasCalculadas);
    }, [props]);

    return <div></div>
}

export default Questao01A