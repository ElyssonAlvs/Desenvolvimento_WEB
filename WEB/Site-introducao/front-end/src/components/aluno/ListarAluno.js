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
        AlunoService.getAlunosFetchAsyncAwait((json) => {
            console.log(json.alunos);
            setAlunos(json.alunos);
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
                (response) => {
                    alert(response);
                    const result = alunos.filter(
                        (aluno) => aluno._id !== id
                    );
                    setAlunos(result);
                }
            );
        }
    };

    const renderizarAlunos = () => {
    if (!Array.isArray(alunos)) {
        return <tr><td colSpan="5">Não foi redenrizado um array</td></tr>;
    }
        const vetorResultado = alunos.map(
            (alunos) => {
                return (
                    <tr key={alunos.id}>
                        <th scope="row">{alunos.id}</th>
                        <td>{alunos.nome}</td>
                        <td>{alunos.curso}</td>
                        <td>{alunos.ira}</td>
                        <td className="button-content">
                            <Link className="btn btn-primary" to={`/alunos/editar/${alunos.id}`}>
                                Editar
                            </Link>
                            <button className="btn btn-danger" onClick={() => deleteAluno(alunos.id)}>
                                Apagar
                            </button>
                        </td>
                    </tr>
                );
            }
        )
        return vetorResultado;
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
                <tbody>{renderizarAlunos()}</tbody>
            </table>
        </div>
    );
};

export default ListarAluno;
