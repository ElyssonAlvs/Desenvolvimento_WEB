import { Link } from "react-router-dom";
import "../../css/crud.css";
import AlunoService from "../../services/AlunoService"; // MongoDB e LocalStorage
import { useState, useEffect } from "react";
// import AlunoFirebaseService from "../../services/AlunoFirebaseService"; // Firebase
// import FirebaseContext from "../../utils/FirebaseContext";


// Quando utilizar o MongoDB, o id terá que ser "_id" ao invés de "id" como está no código para o Firebase.

const ListarAluno = () => {
    const [alunos, setAlunos] = useState([]);
    //const firebase = useContext(FirebaseContext) // Firebase

    useEffect(() => {

        // MongoDB e LocalStorage
        AlunoService.getAlunosAxiosThenCatch((json) => {
            setAlunos(json);
        });

        // Firebase
        // AlunoFirebaseService.listarAluno(
        //     firebase.getFirestoreDb(),
        //     (alunos) => {
        //         setAlunos(alunos)
        //     }
        // );
    },
        //firebase
        []
    );

    const deleteAluno = (id) => {
        if (window.confirm(`Deseja realmente excluir o aluno com id = ${id} ?`)) {

            // Firebase
            // AlunoFirebaseService.apagarAluno(
            //     firebase.getFirestoreDb(),
            //     () => {
            //         const result = alunos.filter((aluno) => aluno.id !== id);
            //         setAlunos(result);
            //     },
            //     id
            // );

            // MongoDB e LocalStorage
            AlunoService.deleteAlunoById(
                id,
                () => {
                    const result = alunos.filter(
                        (aluno) => aluno.id !== id
                    );
                    setAlunos(result);
                }
            );
        }
    };

    const corpoTabela = () => {
        return alunos.map((aluno) => {
            return (
                <tr key={aluno.id}>
                    <th scope="row">{aluno.id}</th> {/* Para MongoDB, use aluno._id */}
                    <td>{aluno.nome}</td>
                    <td>{aluno.curso}</td>
                    <td>{aluno.ira}</td>
                    <td className="button-content">
                        <Link
                            className="btn btn-primary"
                            to={`/alunos/editar/${aluno.id}`}
                        >
                            Editar
                        </Link>

                        <button
                            className="btn btn-danger"
                            onClick={() => deleteAluno(aluno.id)}
                        >
                            Apagar
                        </button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div className="page-content">
            <h1>Listar Alunos</h1>
            <table className="table table-striped table-content table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Curso</th>
                        <th scope="col">IRA</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>{corpoTabela()}</tbody>
            </table>
        </div>
    );
};

export default ListarAluno;
