// nome, codigo da disciplina, período, créditos

const Disciplina = ({ nome_disciplina, cod_disciplina, periodo, credito }) => {
    return (
        <div>
            <h3>Nome: {nome_disciplina}</h3>
            <h3>Código da disciplina: {cod_disciplina}</h3>
            <h3>Periodo: {periodo}</h3>
            <h3>Créditos: {credito}</h3>
        </div>
    )
}

export default Disciplina