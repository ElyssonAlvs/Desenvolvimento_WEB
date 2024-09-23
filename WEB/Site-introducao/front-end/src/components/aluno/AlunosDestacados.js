import { useState, useEffect, useContext } from "react";
import AlunoFirebaseService from "../../services/AlunoFirebaseService"; // Firebase
import FirebaseContext from "../../utils/FirebaseContext";
import "../../css/crud.css"; // Importando o CSS se necessário

const ListarAlunosDestacados = () => {
    const [alunos, setAlunos] = useState([]);
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        AlunoFirebaseService.listarAluno(
            firebase.getFirestoreDb(),
            (alunos) => {
                setAlunos(alunos);
            }
        );
    }, [firebase]);

    return (
        <div className="page-content">
            <h1>Alunos com IRA ≥ 7</h1>
            <table className="table table-striped table-content table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos
                        .filter(aluno => parseFloat(aluno.ira) >= 7) // Filtra alunos com IRA >= 7
                        .map(aluno => (
                            <tr
                                key={aluno.id}
                                className={parseFloat(aluno.ira) >= 7 ? "destaque" : ""}
                            >
                                <th scope="row">{aluno.id}</th>
                                <td>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                                <td>{aluno.ira}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListarAlunosDestacados;
