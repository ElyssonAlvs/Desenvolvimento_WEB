var AlunoModelMongo = require("../models/AlunoModelMongo");

class AlunoServiceMongo {

    static recuperar(request, response) {
        AlunoModelMongo.findById(request.params.id)
        .then( 
            (aluno) => {
                response.json(aluno);
            }
        )
        .catch(error => console.log(error));
    }

    static listar(request, response) {
        AlunoModelMongo.find()
        .then(
            (alunos) => {
                response.json(alunos);       
            }
        )
        .catch(error => console.log(error));
    }

    static criar(request, response) {
        AlunoModelMongo.create(request.body)
        .then(
            (aluno) => {
                response.json(aluno);
            }
        )
        .catch(error => console.log(error));
    }

    static atualizar(request, response) {
        AlunoModelMongo.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true } // Retorna o documento atualizado
        )
        .then(
            (aluno) => {
                response.json(aluno);
            }
        )
        .catch(error => console.log(error));
    }

    static delete(request, response) {
        AlunoModelMongo.findByIdAndDelete(request.params.id)
        .then(
            (aluno) => {
                response.json(aluno);
            }
        )
        .catch(error => console.log(error));
    }
}

module.exports = AlunoServiceMongo;
