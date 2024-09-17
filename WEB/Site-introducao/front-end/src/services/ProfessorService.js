import axios from "axios";

const url = "http://localhost:3003/professores/";

class ProfessorService {

  // AxiosThenCatch para o MongoDB (Mongoose) e LocalStorage
  static postProfessorAxiosThenCatch = (novoProfessor) => {
    axios.post(url + "criar", novoProfessor)
      .then((response) => {
        console.log(response)
      })
      .catch(error => console.log(error))
  }

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

  static getProfessoresFetchThenCatch = (callback) => {
    fetch(url + "listar")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        callback(json);
      })
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

  static getProfessorById = async (id, callback) => {
    try {
      const response = await axios.get(url + "recuperar/" + id);
      callback(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // PUT
  static atualizarProfessorById = (id, professorEditado, callback) => {
    axios
      .put(url + "atualizar/" + id, professorEditado)
      .then((response) => {
        callback(response);
      })
      .catch((error) => console.log(error));
  };

  // DELETE
  static deleteProfessorById = (id, callback) => {
    axios
      .delete(url + "apagar/" + id)
      .then((response) => {
        callback(response)
      })
      .catch((error) => console.log(error));
  };
}

export default ProfessorService;