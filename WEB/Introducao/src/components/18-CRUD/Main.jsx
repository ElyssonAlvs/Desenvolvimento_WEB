import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import CriarAluno from "./aluno/CriarAluno";
import ListarAluno from "./aluno/ListarAluno";
import EditarAluno from "./aluno/EditarAluno";
import CriarProfessor from "./professor/CriarProfessor";
import ListarProfessor from "./professor/ListarProfessor";
import EditarProfessor from "./professor/EditarProfessor";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "alunos/criar",
                element: <CriarAluno/>
            },
            {
                path: "alunos/listar",
                element: <ListarAluno/>
            },
            {
                // Novo
                path: "alunos/editar/:id",
                element: <EditarAluno/>
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
                // Novo
                path: "professores/editar/:id",
                element: <EditarProfessor />
            },
        ]
    }
]);




const Main = () => {
    return (
        <RouterProvider router={router} />
    )
}
export default Main