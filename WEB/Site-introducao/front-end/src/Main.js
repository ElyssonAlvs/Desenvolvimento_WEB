import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import CriarAluno from "./components/aluno/CriarAluno";
import ListarAluno from "./components/aluno/ListarAluno";
import EditarAluno from "./components/aluno/EditarAluno";
import CriarProfessor from "./components/professor/CriarProfessor";
import ListarProfessor from "./components/professor/ListarProfessor";
import EditarProfessor from "./components/professor/EditarProfessor";

// import Firebase from "./utils/Firebase";
// import FirebaseContext from "./utils/FirebaseContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "alunos/criar",
                element: <CriarAluno />
            },
            {
                path: "alunos/listar",
                element: <ListarAluno />
            },
            {
                path: "alunos/editar/:id",
                element: <EditarAluno />
            },
            {
                path: "professores/criar",
                element: <CriarProfessor />
            },
            {
                path: "professores/listar",
                element: <ListarProfessor />
            },
            {
                path: "professores/editar/:id",
                element: <EditarProfessor />
            },
        ]
    }
]);

// Para o FIREBASE
// const Main = () => {
//     return (
//         <FirebaseContext.Provider value={new Firebase()}>
//             <RouterProvider router={router}/>
//         </FirebaseContext.Provider> 
//     )
// }

// Para o MONGODB e LOCAL STORAGE
 const Main = () => {
    return (
        <RouterProvider router={router} />
    )
} 
export default Main
