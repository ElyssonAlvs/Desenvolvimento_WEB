import "../../css/crud.css";
//import AlunoService from "../../services/AlunoService"; // MongoDB e LocalStorage
import AlunoFirebaseService from "../../services/AlunoFirebaseService"; // Firebase
import FirebaseContext from "../../utils/FirebaseContext";

import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

const EditarAluno = () => {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [ira, setIra] = useState('');

  const { id } = useParams(); // Pega o ID do aluno da URL
  //const navigate = useNavigate();

  // Firebase
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    // Firebase
    AlunoFirebaseService.getById(
      firebase.getFirestoreDb(),
      (aluno) => {
        const { nome, curso, ira } = aluno;
        setNome(nome);
        setCurso(curso);
        setIra(ira);
      },
      id
    );

    // MongoDB e LocalStorage
    // AlunoService.getAlunoById(
    //   id,
    //   (aluno) => {
    //     const { nome, curso, ira } = aluno;
    //     setNome(nome);
    //     setCurso(curso);
    //     setIra(ira);
    //   }
    // );

  },
    //firebase
    [firebase, id]
  );

  const handleInputNome = (event) => {
    setNome(event.target.value);
  };

  const handleInputCurso = (event) => {
    setCurso(event.target.value);
  };

  const handleInputIra = (event) => {
    setIra(parseFloat(event.target.value)); // Converte o valor de string para número
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const alunoEditado = { nome, curso, ira };

    // Firebase
    AlunoFirebaseService.atualizarAluno(
      firebase.getFirestoreDb(),
      (aluno) => {
        console.log(aluno);
      },
      id,
      alunoEditado
    );

    // MongoDB e LocalStorage
    // AlunoService.updateAluno(
    //   id,
    //   alunoEditado,
    //   (response) => {
    //     navigate("/aluno/listar")
    //   }
    // );
  };

  return (
    <div className="page-content">
      <h1>Editar Aluno</h1>
      <form className="form-content" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputNome">Nome</label>
          <input
            className="form-control"
            type="text"
            name="nome"
            id="inputNome"
            onChange={handleInputNome}
            value={nome}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="inputCurso">Curso</label>
          <input
            className="form-control"
            type="text"
            name="curso"
            id="inputCurso"
            onChange={handleInputCurso}
            value={curso}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="inputIra">IRA</label>
          <input
            className="form-control"
            type="number"
            name="ira"
            id="inputIra"
            step="0.01"
            onChange={handleInputIra}
            value={ira}
          />
        </div>

        <div className="div-button-submit">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: 0 }}
          >
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarAluno;
