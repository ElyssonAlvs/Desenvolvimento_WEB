import axios from "axios";

const url = "http://localhost:3003/professores/";

class ProfessorService {
  // AxiosThenCatch para o MongoDB (Mongoose) e LocalStorage
  static postProfessorAxiosThenCatch = (professor, callback) => {
    axios
      .post(url + "criar", professor)
      .then((response) => {
        callback(response);
      })
      .catch((error) => console.log(error));
  };


  // GET
  static getProfessoresFetchAsyncAwait = async (callback) => {
    try {
      const response = await fetch(url + "listar");
      const json = await response.json();
      callback(json);
    } catch (error) {
      console.log(error);
    }
  };

  static postProfessorFetchThenCatch = (professor, callback) => {
    fetch(url + "criar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(professor),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => callback(json))
      .catch((error) => console.log(error));
  };

  static getProfessoresAxiosAsyncAwait = async (callback) => {
    try {
      const response = await axios.get(url + "listar");
      callback(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  static getProfessoresAxiosThenCatch = (callback) => {
    axios
      .get(url + "listar")
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => console.log(error));
  };

  static getProfessorById = (id, callback) => {
    axios
      .get(`http://localhost:3003/professores/recuperar/${id}`)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => console.log(error));
  };


  // PUT
  static updateProfessor = (id, professorEditado, callback) => {
    axios
      .put(`http://localhost:3003/professores/atualizar/${id}`, professorEditado)
      .then((response) => {
        callback(response)
      })
      .catch((error) => console.log(error));
  };

  // DELETE
  static deleteProfessorbyId = (id, callback) => {
    axios
      .delete(`http://localhost:3003/professores/apagar/${id}`)
      .then(response => {
        alert("Professor apagado!")
        console.log(response)
        callback("ok!")
      })
      .catch(error => console.log(error))
  }
}

export default ProfessorService;