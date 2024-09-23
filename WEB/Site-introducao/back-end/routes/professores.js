var express = require('express');
var router = express.Router();

const ProfessorService = require("../services/ProfessorService"); // LocalStorage
//const ProfessorServiceMongo = require("../services/ProfessorServiceMongo") // MongoDB
// MongoDB
// const { request } = require('express');
// const { response } = require('express');

// CRUD - Create, Read, Update, Delete

// LOCAL STORAGE
router.get(
    "/listar",
    (request, response, next) => {
        response.json(ProfessorService.listar())
    }
)

router.get(
    "/recuperar/:id",
    (request, response, next) => {
        const id = request.params.id
        const professor = ProfessorService.recuperar(id)
        response.json(professor)
    }
)

router.post(
    "/criar",
    (request, response, next) => {
        const novoProfessor = ProfessorService.criar(request.body)
        response.status(201).json(novoProfessor)
    }
)

router.put(
    "/editar/:id",
    (request, response, next) => {
        const professorAtualizado =
            ProfessorService.editar(
                request.params.id,
                request.body
            )
        response.json(professorAtualizado)
    }
)

router.delete(
    "/apagar/:id",
    (request, response, next) => {
        const res = ProfessorService.apagar(request.params.id)
        response.json({ "res": res })
    }
)

// MONGODB
// router.get(
//     "/listar",
//     (request, response, next) => {
//         ProfessorServiceMongo.listar(request, response)
//     }
// )


// router.get(
//     "/recuperar/:id",
//     (request, response, next) => {
//         ProfessorServiceMongo.recuperar(request, response)
//     }
// )

// router.post(
//     "/criar",
//     (request, response, next) => {
//         ProfessorServiceMongo.criar(request, response)
//     }
// )

// router.put(
//     "/atualizar/:id",
//     (request, response, next) => {
//         ProfessorServiceMongo.atualizar(request, response)
//     }
// )

// router.delete(
//     "/apagar/:id",
//     (request, response, next) => {
//         ProfessorServiceMongo.delete(request, response)
//     }
// )

module.exports = router;