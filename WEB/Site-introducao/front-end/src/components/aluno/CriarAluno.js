import "../../css/crud.css";
import React, { useState } from 'react';
import AlunoService from "../../services/AlunoService";
import { useNavigate } from "react-router-dom";
// import AlunoFirebaseService from "../../services/AlunoFirebaseService";
// import FirebaseContext from "../../utils/FirebaseContext";

const CriarAluno = () => {

    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [ira, setIra] = useState(0);

    const navigate = useNavigate();

    // Firebase
    //const firebase = useContext(FirebaseContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(nome && curso && ira) {
            const novoAluno = { nome, curso, ira };
    
            // AxiosThenCatch para o MongoDB (Mongoose) e LocalStorage
            AlunoService.postAlunoAxiosThenCatch(
                novoAluno,
                (data) => {
                    console.log(data)
                }
            )
            navigate("/aluno/listar");
            // Persistindo no Firebase
            // AlunoFirebaseService.criarAluno(
            //     firebase.getFirestoreDb(),
            //     novoAluno,
            //     (alunoSimples) => console.log(alunoSimples),
            // );
        }
        alert("Todos os campos devem ser preenchidos!");

    }


    return (
        <>
            <h1>Criar Aluno</h1>
            <form className='form-content' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='InputNome'>Nome:</label>
                    <input className='form-control'
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='InputCurso'>Curso:</label>
                    <input className='form-control'
                        type="text"
                        name="curso"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='InputIra'>IRA:</label>
                    <input className='form-control'
                        type="text"
                        name="ira"
                        value={ira}
                        onChange={(e) => setIra(e.target.value)} />
                </div>
                <div className="div-button-submit">
                    <button className="btn btn-primary" type="submit">Criar</button>
                </div>
            </form>
        </>
    );
}

export default CriarAluno;
