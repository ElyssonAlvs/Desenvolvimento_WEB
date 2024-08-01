// Tudo novo
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditarAluno = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [ira, setIra] = useState('')

    useEffect(() => {
        const storedAlunos = JSON.parse(localStorage.getItem('alunos')) || []
        const aluno = storedAlunos[id]
        if (aluno) {
            setNome(aluno.nome)
            setCurso(aluno.curso)
            setIra(aluno.ira)
        }
    }, [id])


    const handleSubmit = (event) => {
        event.preventDefault()
        const storedAlunos = JSON.parse(localStorage.getItem('alunos')) || []
        storedAlunos[id] = { nome, curso, ira }
        localStorage.setItem('alunos', JSON.stringify(storedAlunos))
        navigate('/aluno/listar')
    }

    return (
        <div>
            <h1>Editar Aluno</h1>
            <form classname='form-content' onSubmit={handleSubmit}>
                <div classname='mb-3'>
                    <label classname='form-label' htmlFor='InputNome'>Nome:</label>
                    <input classname='form-control'
                        type='text'
                        name='nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='InputCurso'>Curso:</label>
                    <input className='form-control'
                        type='text'
                        name='curso'
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='InputIra'>Ira:</label>
                    <input className='form-control'
                        type='text'
                        name='ira'
                        value={ira}
                        onChange={(e) => setIra(e.target.value)}
                    />
                </div>
                <div className='div-button-submit'>
                    <button className='btn btn-primary' type='submit'>Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default EditarAluno