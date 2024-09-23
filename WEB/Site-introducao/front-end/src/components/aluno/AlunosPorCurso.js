import { useState, useEffect, useContext } from "react";
import AlunoFirebaseService from "../../services/AlunoFirebaseService"; // Firebase
import FirebaseContext from "../../utils/FirebaseContext";
import "../../css/crud.css"; // Importando o CSS se necessário

const ListarAlunosPorCurso = () => {
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

    const alunosPorCurso = alunos.reduce((acc, aluno) => {
        if (!acc[aluno.curso]) {
            acc[aluno.curso] = [];
        }
        acc[aluno.curso].push(aluno);
        return acc;
    }, {});

    return (
        <div className="page-content">
            <h1>Listar Alunos por Curso</h1>
            {Object.keys(alunosPorCurso).map(curso => (
                <div key={curso}>
                    <h2>{curso}</h2>
                    <ul>
                        {alunosPorCurso[curso].map(aluno => (
                            <li key={aluno.id}>{aluno.nome} IRA: {aluno.ira}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ListarAlunosPorCurso;
