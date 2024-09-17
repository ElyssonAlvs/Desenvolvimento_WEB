import axios from "axios";

const url = "http://localhost:3003/alunos/";

class AlunoService {

    // AxiosThenCatch para o MongoDB (Mongoose) e LocalStorage
    static postAlunoAxiosThenCatch = (novoAluno) => {
        axios.post(url + "criar", novoAluno)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // GET
    static getAlunosFetchAsyncAwait = async (callback) => {
        try {
            const response = await fetch(url + "listar");
            const json = await response.json();
            callback(json);
        } catch (error) {
            console.log(error);
        }
    };

    static getAlunosFetchThenCatch = (callback) => {
        fetch(url + "listar")
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                callback(json);
            })
            .catch((error) => console.log(error));
    };

    static getAlunosAxiosAsyncAwait = async (callback) => {
        try {
            const response = await axios.get(url + "listar");
            callback(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    static getAlunosAxiosThenCatch = (callback) => {
        axios
            .get(url + "listar")
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => console.log(error));
    };

    static getAlunoById = (id, callback) => {
        axios
            .get(url + "recuperar/" + id)
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => console.log(error));
    };

    // PUT
    static atualizarAlunoById = (id, alunoEditado, callback) => {
        axios
            .put(url + "atualizar/" + id, alunoEditado)
            .then((response) => {
                callback(response);
            })
            .catch((error) => console.log(error));
    };

    // DELETE
    static deleteAlunoById = (id, callback) => {
        axios
            .delete(url + "apagar/" + id)
            .then((response) => {
                callback(response);
            })
            .catch((error) => console.log(error));
    };
}

export default AlunoService;
