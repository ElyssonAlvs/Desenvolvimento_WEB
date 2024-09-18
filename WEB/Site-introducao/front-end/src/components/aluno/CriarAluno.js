import "../../css/crud.css";
import React, { useState } from "react";
import AlunoService from "../../services/AlunoService";
// import AlunoFirebaseService from "../../services/AlunoFirebaseService";
// import FirebaseContext from "../../utils/FirebaseContext";

const CriarAluno = () => {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [ira, setIra] = useState("");

    // Firebase
    //const firebase = useContext(FirebaseContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const novoAluno = { nome, curso, ira };
        AlunoService.postAlunoAxiosThenCatch(novoAluno, (data) => {
            console.log(data);
        });

        // Persistindo no Firebase
        // AlunoFirebaseService.criarAluno(
        //     firebase.getFirestoreDb(),
        //     novoAluno,
        //     (alunoSimples) => console.log(alunoSimples),
        // );
    };

    return (
        <>
            <h1>Criar Aluno</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="InputNome">
                        Nome:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="InputCurso">
                        Curso:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="curso"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="InputIra">
                        IRA:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="ira"
                        value={ira}
                        onChange={(e) => setIra(e.target.value)}
                    />
                </div>
                <div className="div-button-submit">
                    <button className="btn btn-primary" type="submit">
                        SUBMETER
                    </button>
                </div>
            </form>
        </>
    );
};

export default CriarAluno;
