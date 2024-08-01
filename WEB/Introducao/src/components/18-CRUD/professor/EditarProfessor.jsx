// Tudo novo
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditarProfessor = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("")

    useEffect(() => {
        const storedProfessores = JSON.parse(localStorage.getItem("professores")) || []
        const professor = storedProfessores[id]
        if (professor) {
            setNome(professor.nome)
            setCurso(professor.curso)
            setTitulacao(professor.titulacao)
        }
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault()
        const storedProfessores = JSON.parse(localStorage.getItem("professores")) || []
        storedProfessores[id] = { nome, curso, titulacao }
        localStorage.setItem("professores", JSON.stringify(storedProfessores))
        navigate("/professor/listar")
    }

    return (
        <div>
            <h1>Editar Professor</h1>
            <form className="form-content" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="InputNome">Nome:</label>
                    <input className="form-control"
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="InputCurso">Curso:</label>
                    <input className="form-control"
                        type="text"
                        name="curso"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="InputTitulo">Titulação:</label>
                    <select className="form-select" value={titulacao} onChange={(e) => setTitulacao(e.target.value)}>
                        <option value="Graduação">Graduação</option>
                        <option value="Mestrado">Mestrado</option>
                        <option value="Doutorado">Doutorado</option>
                    </select>
                </div>
                <div className="div-button-submit">
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default EditarProfessor