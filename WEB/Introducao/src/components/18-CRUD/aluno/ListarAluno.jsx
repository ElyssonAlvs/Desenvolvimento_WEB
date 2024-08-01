import alunos from "../data/db_aluno";
import "../css/crud.css";

const ListarAluno = () => {
    const corpoTabela = () => {
        const novoArray = alunos.map(
            (aluno) => {
                return (
                    //cada elemento do array de alunos
                    <tr>
                        <th scope="row">{aluno.id}</th>
                        <td>{aluno.nome}</td>
                        <td>{aluno.curso}</td>
                        <td>{aluno.ira}</td>
                        <td>
                            <button type="button" className="btn btn-secondary">
                                Editar
                            </button>
                            <button type="button" className="btn btn-danger">Excluir</button>
                        </td>
                    </tr>
                ); //return de cada elemento como um JSX
            } //funcao arrow
        ) // map
        return novoArray
    }

    return (
        <div className="page-content">
            <h1>Listar Alunos</h1>
            <table className="table table-striped table-content">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Curso</th>
                        <th scope="col">IRA</th>
                    </tr>
                </thead>
                <tbody>{corpoTabela()}</tbody>
            </table>
        </div>
    )
}


export default ListarAluno;