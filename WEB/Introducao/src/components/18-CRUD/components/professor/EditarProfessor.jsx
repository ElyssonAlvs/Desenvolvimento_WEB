// // Tudo novo
// import "../../css/crud.css";
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Form } from "react-router-dom";
// // import axios from "axios";
// // import { Form, Button, Container, Row, Col } from 'react-bootstrap';

// const EditarProfessor = () => {

//     /*

//     useEffect(() => {
//         axios.get("http://localhost:8080/professor/retrieve/${id}")
//         .then((response) => {
//             setNome(response.data.nome)
//             setCurso(response.data.curso)
//             setTitulacao(response.data.titulacao)
//             setAi(response.data.ai)
//             setUniversidade(response.data.universidade)
//         }.catch(error=>console.log.error(error))
//     }, [])

//     */

//     const { id } = useParams()
//     const navigate = useNavigate()
//     const [nome, setNome] = useState("")
//     const [curso, setCurso] = useState("")
//     const [titulacao, setTitulacao] = useState("")
//     const [ai, setAi] = useState({ es: false, lc: false, mc: false })
//     const [universidade, setUniversidade] = useState({ ufc: true, ifce: false, uece: false })

//     useEffect(() => {
//         const storedProfessores = JSON.parse(localStorage.getItem("professores")) || []
//         const professor = storedProfessores[id]
//         if (professor) {
//             setNome(professor.nome)
//             setCurso(professor.curso)
//             setTitulacao(professor.titulacao)
//         }
//     }, [id])

//     function handleSubmit(event) {
//         event.preventDefault()
//         /*console.log(nome)
//         console.log(curso)
//         console.log(titulacao)
//         console.log(ai)*/
//         const professorAtualizado = { nome, curso, titulacao, ai }
//         axios.put(`http://localhost:3001/professor/update/${id}`, professorAtualizado)
//             .then(
//                 (response) => {
//                     alert(`Professor ID ${response.data._id} atualizado!`)
//                     navigate("/listarProfessor")
//                 }
//             )
//             .catch(error => console.log(error))
//     }

//     function handleCheckbox(event) {
//         setAi({
//             ...ai,
//             [event.target.name]: event.target.checked,
//         })
//     }

//     /*
//     return (
//         <div>
//             <h1>Editar Professor</h1>
//             <form className="form-content" onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label className="form-label" htmlFor="InputNome">Nome:</label>
//                     <input className="form-control"
//                         type="text"
//                         name="nome"
//                         value={nome}
//                         onChange={(e) => setNome(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label" htmlFor="InputCurso">Curso:</label>
//                     <input className="form-control"
//                         type="text"
//                         name="curso"
//                         value={curso}
//                         onChange={(e) => setCurso(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label" htmlFor="InputTitulo">Titulação:</label>
//                     <select className="form-select" value={titulacao} onChange={(e) => setTitulacao(e.target.value)}>
//                         <option value="Graduação">Graduação</option>
//                         <option value="Mestrado">Mestrado</option>
//                         <option value="Doutorado">Doutorado</option>
//                     </select>
//                 </div>
//                 <div className="div-button-submit">
//                     <button type="submit" className="btn btn-primary">Salvar</button>
//                 </div>
//             </form>
//         </div>
//     )
//     */
//     return (
//         <Container>
//             <h5 className="font-weight-bold">Editar Professor</h5>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="formNome">
//                     <Form.Label>Nome Completo</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={nome}
//                         onChange={(event) => setNome(event.target.value)}
//                         required
//                         autoFocus
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="formCurso">
//                     <Form.Label>Curso</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={curso}
//                         onChange={(event) => setCurso(event.target.value)}
//                         required
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="formTitulacao">
//                     <Form.Label>Titulação</Form.Label>
//                     <Form.Control
//                         as="select"
//                         value={titulacao}
//                         onChange={(event) => setTitulacao(event.target.value)}
//                         required
//                     >
//                         <option value="GRAD">Graduação</option>
//                         <option value="MEST">Mestrado</option>
//                         <option value="DOUT">Doutorado</option>
//                     </Form.Control>
//                 </Form.Group>
//                 <Form.Group controlId="formUniversidade">
//                     <Form.Label>Universidade</Form.Label>
//                     <Form.Control
//                         as="select"
//                         value={universidade}
//                         onChange={(event) => setUniversidade(event.target.value)}
//                         required
//                     >
//                         <option value="UFC">UFC</option>
//                         <option value="IFCE">IFCE</option>
//                         <option value="UECE">UECE</option>
//                     </Form.Control>
//                 </Form.Group>

//                 <fieldset className="mt-3">
//                     <Form.Label as="legend" column>
//                         Áreas de Interesse
//                     </Form.Label>
//                     <Col>
//                         <Form.Check
//                             type="checkbox"
//                             label="Engenharia de Software"
//                             checked={es}
//                             onChange={handleCheckbox}
//                             name="es"
//                         />
//                         <Form.Check
//                             type="checkbox"
//                             label="Matemática Computacional"
//                             checked={mc}
//                             onChange={handleCheckbox}
//                             name="mc"
//                         />
//                     </Col>
//                 </fieldset>

//                 <div className="d-flex justify-content-center mt-3">
//                     <Button variant="primary" type="submit">
//                         Atualizar
//                     </Button>
//                 </div>
//             </Form>
//         </Container>
//     );
// }

// export default EditarProfessor