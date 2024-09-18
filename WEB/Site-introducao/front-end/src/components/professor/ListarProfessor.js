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

  useEffect(
    () => {
      // MongoDB e LocalStorage
      ProfessorService.getProfessoresFetchAsyncAwait((data) => {
        console.log(data.professores);
        setProfessores(data.professores);
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

  const handleDelete = (id) => {
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

      // MongoDD e LocalStorage
      ProfessorService.deleteProfessorbyId(id, (response) => {
        alert(response);
        const result = professores.filter((professor) => professor.id !== id);
        setProfessores(result);
      });
    }
  };

  const renderizarProfessores = () => {
  if (!Array.isArray(professores)) {
    return <tr><td colSpan="5">Não foi redenrizado um array</td></tr>;
  }
    const vetorResultado = professores.map((professor) => {
      return (
        <>
          <tr>
            <th scope="row">{professor.id}</th>
            <td>{professor.nome}</td>
            <td>{professor.curso}</td>
            <td>{professor.titulacao}</td>
            <td>
              <div className="button-content">
                <Link
                  to={`/professor/editar/${professor.id}`}
                  className="btn btn-primary"
                >
                  Editar
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(professor.id)}
                >
                  Apagar
                </button>
              </div>
            </td>
          </tr>
        </>
      );
    });
    return vetorResultado;
  };

  return (
    <div className="page-content">
      <h1>Listar Professores {process.env.REACT_APP_LINK_API}</h1>
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
        <tbody>{renderizarProfessores()}</tbody>
      </table>
    </div>
  );
};

export default ListarProfessor;
