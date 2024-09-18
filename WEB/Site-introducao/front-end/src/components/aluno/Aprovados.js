import React, {useState, useEffect} from "react";
import axios from "axios";

const Aprovados = () => {
    const [alunos, setAlunos] = useState([]);
    const [aprovados, setAprovados] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3003/alunos/listar')
        .then((response) => {
            setAlunos(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    const deleteAlunoById = (id) => {
        if(window.confirm("Deseja realmente excluir este aluno?")) {
            axios.delete('http://localhost:3003/alunos/deletar/' + id)
            .then((response) => {
                console.log(response.data);
                setAlunos(alunos.filter(aluno => aluno._id !== id));
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
}