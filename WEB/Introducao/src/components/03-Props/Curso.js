// imprima o nome do curso e pelo menos 3 disciplinas
import Disciplina from "./Disciplina";

const Curso = () => {
    return (
        <div>
            <h1>Sistemas de Informação</h1>
            <hr />
            <Disciplina
                nome_disciplina="Engeharia de Software"
                cod_disciplina="xxxxxx"
                periodo="Manhã"
                credito={4}
            />
            <hr />
            <Disciplina
                nome_disciplina="Lógica para Computação"
                cod_disciplina="xxxxxx"
                periodo="Manhã"
                credito={4}
            />
            <hr />
            <Disciplina
                nome_disciplina="Cálculo II"
                cod_disciplina="xxxxxx"
                periodo="Manhã"
                credito={4}
            />
        </div>
    )
}

export default Curso;
