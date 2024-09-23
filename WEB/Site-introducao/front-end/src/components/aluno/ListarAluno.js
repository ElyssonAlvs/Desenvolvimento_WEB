// AP2 
import { Link } from "react-router-dom";
import "../../css/crud.css";
import { useState, useEffect, useContext } from "react";
import AlunoFirebaseService from "../../services/AlunoFirebaseService"; // Firebase
import FirebaseContext from "../../utils/FirebaseContext";

const ListarAluno = () => {
    const [alunos, setAlunos] = useState([]);
    const [destacar, setDestacar] = useState(false); // Estado para controle de destaque
    const firebase = useContext(FirebaseContext); // Firebase

    useEffect(() => {
        AlunoFirebaseService.listarAluno(
            firebase.getFirestoreDb(),
            (alunos) => {
                setAlunos(alunos);
            }
        );
    }, [firebase]);

    const handleDelete = (id) => {
        if (window.confirm(`Deseja realmente excluir o aluno com id = ${id} ?`)) {
            AlunoFirebaseService.apagarAluno(
                firebase.getFirestoreDb(),
                () => {
                    const result = alunos.filter((aluno) => aluno.id !== id);
                    setAlunos(result);
                },
                id
            );
        }
    };

    const calcularMediaIRA = () => {
        if (alunos.length === 0) return 0;

        const somaIRAs = alunos.reduce((acc, aluno) => acc + parseFloat(aluno.ira), 0);
        const mediaIRA = somaIRAs / alunos.length;
        return Number(mediaIRA.toFixed(2));
    };

    const renderizarAlunos = () => {
        const mediaIRA = calcularMediaIRA();

        return alunos.map(
            (aluno) => {
            const ira = parseFloat(aluno.ira);
            let classe = '';

            if (destacar) {
                classe = ira < mediaIRA ? 'abaixo-media' : ira > mediaIRA ? 'acima-media' : '';
            }
            
            return (
                <tr key={aluno.id} className={classe}>
                    <th scope="row">{aluno.id}</th>
                    <td>{aluno.nome}</td>
                    <td>{aluno.curso}</td>
                    <td>{aluno.ira}</td>
                    <td className="button-content">
                        <Link className="btn btn-primary" to={`/alunos/editar/${aluno.id}`}>
                            Editar
                        </Link>
                        <button className="btn btn-danger" onClick={() => handleDelete(aluno.id)}>
                            Apagar
                        </button>
                    </td>
                </tr>
            );
        }).concat(
            <tr key="media" style={{ fontWeight: 'bold' }}>
                <th scope="row">Média</th>
                <td colSpan="3"></td>
                <td>{calcularMediaIRA()}</td>
            </tr>
        );
    };

    const handleDestacar = () => {
        console.log(destacar);
        
        setDestacar(!destacar);  
    };

    return (
        <div className="page-content">
            <h1>Listar Alunos</h1>
            <button className="btn btn-secondary" onClick={handleDestacar}>
                {destacar ? 'Remover Destaque' : 'Destacar Alunos'}
            </button>
            <table className="table table-striped table-content table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Curso</th>
                        <th scope="col">IRA</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>{renderizarAlunos()}</tbody>
            </table>
        </div>
    );
};

export default ListarAluno;


// Para MongoDB e LocalStorage
// import { Link } from "react-router-dom";
// import "../../css/crud.css";
// //import AlunoService from "../../services/AlunoService"; // MongoDB e LocalStorage
// import { useState, useEffect, useContext } from "react";
// import AlunoFirebaseService from "../../services/AlunoFirebaseService"; // Firebase
// import FirebaseContext from "../../utils/FirebaseContext";


// // Quando utilizar o MongoDB, o id terá que ser "_id" ao invés de "id" como está no código para o Firebase.

// const ListarAluno = () => {
//     const [alunos, setAlunos] = useState([]);
//     const [destacar, setDestacar] = useState(false); // Estado para controle de destaque
//     const firebase = useContext(FirebaseContext) // Firebase


//     useEffect(() => {

//         // MongoDB e LocalStorage
//         // AlunoService.getAlunosFetchAsyncAwait((data) => {
//         //     setAlunos(data);
//         // });

//         // Firebase
//         AlunoFirebaseService.listarAluno(
//             firebase.getFirestoreDb(),
//             (alunos) => {
//                 setAlunos(alunos)
//             }
//         );
//     },
//         //firebase
//         [firebase]
//     );

//     const handleDelete = (id) => {
//         if (window.confirm(`Deseja realmente excluir o aluno com id = ${id} ?`)) {

//             // Firebase
//             AlunoFirebaseService.apagarAluno(
//                 firebase.getFirestoreDb(),
//                 () => {
//                     const result = alunos.filter((aluno) => aluno.id !== id);
//                     setAlunos(result);
//                 },
//                 id
//             );

//             // MongoDB e LocalStorage
//             // AlunoService.deleteAlunoById(
//             //     id,
//             //     (response) => {
//             //         alert(response);
//             //         const result = alunos.filter((aluno) => aluno._id !== id);
//             //         setAlunos(result);
//             //     }
//             // );
//         }
//     };

//     // Função para calcular a média dos IRAs
//     const calcularMediaIRA = () => {
//         // Verifica se há alunos para evitar divisão por zero
//         if (alunos.length === 0) {
//             return 0; // Retorna 0 se não houver alunos
//         }
    
//         // Calcula a soma dos IRAs
//         let somaIRAs = 0;
//         for (const aluno of alunos) {
//             // Adiciona o IRA do aluno à soma, convertendo para número
//             somaIRAs += parseFloat(aluno.ira);
//         }
    
//         // Calcula a média dos IRAs
//         const mediaIRA = somaIRAs / alunos.length;
    
//         // Retorna a média com 2 casas decimais
//         return Number(mediaIRA.toFixed(2));
//     };


//     const renderizarAlunos = () => {
//         if (!Array.isArray(alunos)) {
//             return <tr><td colSpan="5">Não foi renderizado um array</td></tr>;
//         }

//         const mediaIRA = calcularMediaIRA();

//         const vetorResultado = alunos.map((aluno) => {
//             let classe = "";
//             if (destacar && parseFloat(aluno.ira) > mediaIRA) {
//                 classe = "acima-media-7";
//             }else if(destacar && parseFloat(aluno.ira) < mediaIRA){
//                 classe = "abaixo-media-7";
//             }
//             <tr key={aluno.id}>
//                 <th scope="row">{aluno.id}</th>
//                 <td>{aluno.nome}</td>
//                 <td>{aluno.curso}</td>
//                 <td>{aluno.ira}</td>
//                 <td className="button-content">
//                     <Link className="btn btn-primary" to={`/alunos/editar/${aluno.id}`}>
//                         Editar
//                     </Link>
//                     <button className="btn btn-danger" onClick={() => handleDelete(aluno.id)}>
//                         Apagar
//                     </button>
//                 </td>
//             </tr>
//         });

//         // Adiciona a linha da média aritmética
//         vetorResultado.push(
//             <tr key="media" style={{ backgroundColor: '#f0f8ff', fontWeight: 'bold' }}>
//                 <th scope="row">Média</th>
//                 <td colSpan="3"></td>
//                 <td>{calcularMediaIRA()}</td>
//                 <td></td>
//             </tr>
//         );

//         return vetorResultado;
//     };

//     const toggleDestacar = () => {
//         setDestacar(!destacar);
//     }

//     return (
//         <div className="page-content">
//             <h1>Listar Alunos</h1>
//             <table className="table table-striped table-content table-bordered">
//                 <thead className="table-dark">
//                     <tr>
//                         <th scope="col">ID</th>
//                         <th scope="col">Nome</th>
//                         <th scope="col">Curso</th>
//                         <th scope="col">IRA</th>
//                         <th scope="col"></th>
//                     </tr>
//                 </thead>
//                 <tbody>{renderizarAlunos()}</tbody>
//             </table>
//         </div>
//     );
// };

// export default ListarAluno;
