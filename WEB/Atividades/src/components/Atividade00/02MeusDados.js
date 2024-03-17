const MeusDadosProps = (Props) => {

    let { nome, curso, universidade } = Props

    return (
        <div>
            <h3>Nome: {nome} </h3>
            <h3>Curso: {curso}</h3>
            <h3>Universidade: {universidade}</h3>
        </div>
    )
}

export default MeusDadosProps