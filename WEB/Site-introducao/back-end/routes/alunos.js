var express = require('express');
var router = express.Router();

const AlunoService = require("../services/AlunoService");
// const AlunoServiceMongo = require("../services/AlunoServiceMongo") // MongoDB
// MongoDB
// const { request } = require('express');
// const { response } = require('express');

// CRUD - Create, Read, Update, Delete

// LOCAL STORAGE
router.get(
    "/listar",
    (request, response, next) => {
            response.json(AlunoService.listar()
        )
    }
)

router.get(
    "/recuperar/:id",
    (request, response, next) => {
        const id = request.params.id
        const aluno = AlunoService.recuperar(id)
        response.json(aluno)
    }
)

router.post(
    "/criar",
    (request, response, next) => {
        const novoAluno = AlunoService.criar(request.body)
        response.json(novoAluno)
    }
)

router.put(
    "/atualizar/:id",
    (request, response, next) => {
        const alunoAtualizado =
            AlunoService.atualizar(
                request.params.id,
                request.body
            )
        response.json(alunoAtualizado)
    }
)

router.delete(
    "/apagar/:id",
    (request, response, next) => {
        const res = AlunoService.apagar(request.params.id)
        response.json({ "res": res })
    }
)

//MONGODB
// router.get(
//     "/listar",
//     (request, response, next) => {
//         AlunoServiceMongo.listar(request, response)
//     }
// )


// router.get(
//     "/recuperar/:id",
//     (request, response, next) => {
//         AlunoServiceMongo.recuperar(request, response)
//     }
// )

// router.post(
//     "/criar",
//     (request, response, next) => {
//         AlunoServiceMongo.criar(request, response)
//     }
// )

// router.put(
//     "/atualizar/:id",
//     (request, response, next) => {
//         AlunoServiceMongo.atualizar(request, response)
//     }
// )

// router.delete(
//     "/apagar/:id",
//     (request, response, next) => {
//         AlunoServiceMongo.delete(request, response)
//     }
// )

module.exports = router;