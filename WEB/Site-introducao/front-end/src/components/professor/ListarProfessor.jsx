// import professores from "../data/db_professor";
import "../../css/crud.css";
import ProfessorService from "../../services/ProfessorService";
import { useEffect, useState } from "react";


const ListarProfessor = () => {

    // Novo código
    const [professores, setProfessores] = useState([]);

    useEffect(() => {
        ProfessorService.getProfessoresFetchAsyncAwait(data => {
            setProfessores(data);
        });
    },
        []
    );
    // Fim do novo código

    const renderizarProferrores = () => {
        const vetorResultado = professores.map(
            (professor) => {
                return (
                    //cada elemento do array de professores
                    <tr>
                        <th scope="row">{professor.id}</th>
                        <td>{professor.nome}</td>
                        <td>{professor.curso}</td>
                        <td>{professor.titulacao}</td>
                        <td>
                            <div className="button-content">
                                <button type="button" className="btn btn-primary">
                                    Editar
                                </button>
                                <button type="button" className="btn btn-danger">
                                    Excluir
                                </button>
                            </div>
                        </td>
                    </tr>
                ); //return de cada elemento como um JSX
            } //funcao arrow
        ); //map
        return vetorResultado;
    }


    return (
        <div className="page-content">
            <h1>Listar Professores</h1>
            <table className="table table-striped table-content table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Titulação</th>
                    </tr>
                </thead>
                <tbody>{renderizarProferrores()}</tbody>
            </table>
        </div>
    );
};

export default ListarProfessor;
