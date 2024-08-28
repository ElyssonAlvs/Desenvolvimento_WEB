import "../../css/crud.css";
import React, { useState } from 'react'

const CriarAluno = () => {

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [ira, setIra] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Nome: " + nome + "\n Curso: " + curso + "\n IRA: " + ira)
    }

    return (
        <>
            <h1>Criar Aluno</h1>
            <form className='form-content' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='InputNome'>Nome:</label>
                    <input className='form-control'
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='InputCurso'>Curso:</label>
                    <input className='form-control'
                        type="text"
                        name="Curso"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='InputIra'>IRA:</label>
                    <input className='form-control'
                        type="text"
                        name="IRA"
                        value={ira}
                        onChange={(e) => setIra(e.target.value)} />
                </div>
                <div className="div-button-submit">
                    <button class="btn btn-primary" type="submit">Criar</button>
                </div>
            </form>
        </>
    );
}

export default CriarAluno;