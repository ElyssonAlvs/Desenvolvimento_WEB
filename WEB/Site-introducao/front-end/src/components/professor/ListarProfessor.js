import { Link } from "react-router-dom";

import "../../css/crud.css";
import ProfessorService from "../../services/ProfessorService"; // MongoDB e LocalStorage
import { useState, useEffect } from "react";
// import ProfessorFirebaseService from "../../services/ProfessorFirebaseService";
// import FirebaseContext from "../../utils/FirebaseContext";



// Quando utilizar o Mongo o id terá que ter 
// um "_id" e não "id" como está no código para o Firebase.


const ListarProfessor = () => {
  const [professores, setProfessores] = useState([]);
  //const firebase = useContext(FirebaseContext) // firebase

  useEffect(() => {
    // MongoDB e LocalStorage
    ProfessorService.getProfessoresAxiosAsyncAwait((json) => {
      setProfessores(json);
    });

    // Firebase
    // ProfessorFirebaseService.listarProfessor(
    //   firebase.getFirestoreDb(),
    //   (professores) => {
    //     // console.log(professores)
    //     setProfessores(professores)
    //   }
    // )

  },
    // firebase 
    []
  );

  const deleteProfessor = (id) => {
    if (window.confirm(`Deseja realmente excluir id = ${id} ?`)) {

      // Firebase
      // ProfessorFirebaseService.apagarProfessor(
      //   firebase.getFirestoreDb(),
      //   () => {
      //     const result = professores.filter(
      //       (professor) => professor.id !== id
      //     )
      //     setProfessores(result)
      //   },
      //   id
      // )

      // MongoDB        
      ProfessorService.deleteProfessorById(
        id,
        (response) => {
          const result = professores.filter(
            (professor) => professor.id !== id
          )
          setProfessores(result)
        });
    }
  }

  const corpoTabela = () => {
    const novoArray = professores.map(
      (professor) => {
        return (
          <tr>
            <th scope="row">{professor.id}</th>
            <td>{professor.nome}</td>
            <td>{professor.curso}</td>
            <td>{professor.titulacao}</td>
            <td className="button-content">

              <Link
                className="btn btn-primary"
                to={`/professores/editar/${professor.id}`}
              >
                Editar
              </Link>

              <button
                className="btn btn-danger"
                onClick={() => deleteProfessor(professor.id)}
              >
                Apagar
              </button>
            </td>
          </tr>
        ); //return de cada elemento como um JSX
      } //funcao arrow
    ); //map
    return novoArray;
  };

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
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{corpoTabela()}</tbody>
      </table>
    </div>
  );
};

export default ListarProfessor;