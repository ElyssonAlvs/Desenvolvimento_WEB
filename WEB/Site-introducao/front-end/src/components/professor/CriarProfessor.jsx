import "../../css/crud.css";
import { useState } from 'react'
import ProfessorService from "../../services/ProfessorService";


const CriarProfessor = () => {
    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [titulacao, setTitulacao] = useState('GRADUAÇÃO')
    const [ai, setAi] = useState({ es: false, lc: false, mc: false }) // ai = área de interesse
    const [universidade, setUniversidade] = useState({ ufc: true, ifce: false, uece: false })

    const handleRadio = (event) => {
        const reset = { ufc: false, ifce: false }
        setUniversidade({
            ...reset,
            [event.target.value]: event.target.checked
        })
    }

    const handleCheckbox = (event) => {
        setAi(
            {
                ...ai,
                [event.target.name]: event.target.checked
            }
        )
    }

    const handleInputNome = (event) => {
        setNome(event.target.value)
    }

    const handleInputCurso = (event) => {
        setCurso(event.target.value)
    }

    const handleInputTitulacao = (event) => {
        setTitulacao(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //alert("Nome: " + nome + "\n Curso: " + curso)
        // Objeto JSON
        const novoProfessor = { nome, curso, titulacao, ai, universidade }
        ProfessorService.postProfessoresAxiosThenCatch(novoProfessor, (data) => {
            console.log(data)
        })
    }

    return (
        <div>
            <h1>Criar Professor</h1>
            <form className='page-content' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label
                        className='form-label'
                        htmlFor='InputNome'>
                        Nome:
                    </label>
                    <input
                        className='form-control'
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={handleInputNome}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='InputCurso'>Curso:</label>
                    <input
                        className='form-control'
                        type="text"
                        name="Curso"
                        value={curso}
                        onChange={handleInputCurso}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' >Titulação:</label>
                    <select
                        className='form-select'
                        value={titulacao}
                        id="selectTitulacao"
                        onChange={handleInputTitulacao}
                    >
                        <option value="GRADUAÇÃO">GRADUAÇÃO</option>
                        <option value="DOUTOR">DOUTOR</option>
                        <option value="MESTRE">MESTRE</option>
                    </select>
                </div>

                {/* Áreas de interesse */}

                <div>
                    <div className="form-label">Áreas de Interesse</div>
                    <fieldset className=" scheduler-border">
                        <div className="form-check">
                            <input
                                id="idES"
                                type="checkbox"
                                className="form-check-input"
                                checked={ai.es}
                                onChange={handleCheckbox}
                                name="es"
                            />
                            <label
                                htmlFor="idES"
                                className="form-check-label"
                            >
                                Engenharia de Software
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                id="idLC"
                                type="checkbox"
                                className="form-check-input"
                                checked={ai.lc}
                                onChange={handleCheckbox}
                                name="lc"
                            />
                            <label
                                htmlFor="idLC"
                                className="form-check-label">
                                Lógica Computacional
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                id="idMC"
                                type="checkbox"
                                className="form-check-input"
                                checked={ai.mc}
                                onChange={handleCheckbox}
                                name="mc"
                            />
                            <label
                                htmlFor="idMC"
                                className="form-check-label">
                                Matemática Computacional
                            </label>
                        </div>
                    </fieldset>

                    {/* Universidade de Origem */}

                    <div className="form-label">Universidade de Origem</div>
                    <fieldset className=" scheduler-border">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="idUFC"
                                name="universidade"
                                value="ufc"
                                checked={universidade.ufc}
                                onChange={handleRadio}
                            />
                            <label
                                htmlFor="idUFC"
                                className="form-check-label"
                            >
                                Universidade Federal do Ceará
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="idIFCE"
                                name="universidade"
                                value="ifce"
                                checked={universidade.ifce}
                                onChange={handleRadio}
                            />
                            <label
                                htmlFor="idIFCE"
                                className="form-check-label"
                            >
                                Instituto Federal do Ceará
                            </label>
                        </div>
                        <div>
                            <input
                                className="form-check-input"
                                type="radio"
                                id="idUECE"
                                name="universidade"
                                value="uece"
                                checked={universidade.uece}
                                onChange={handleRadio}
                            />
                            <label
                                htmlFor="idUECE"
                                className="form-check-label"
                            >
                                Universidade Estadual do Ceará
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div className="div-button-submit">
                    <button class="btn btn-primary" type="submit">Submeter</button>
                </div>
            </form>
        </div>
    )
}

export default CriarProfessor