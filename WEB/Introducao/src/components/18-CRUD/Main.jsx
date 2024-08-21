import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import CriarAluno from "./components/aluno/CriarAluno";
import ListarAluno from "./components/aluno/ListarAluno";
import EditarAluno from "./components/aluno/EditarAluno";
import CriarProfessor from "./components/professor/CriarProfessor";
import ListarProfessor from "./components/professor/ListarProfessor";
import EditarProfessor from "./components/professor/EditarProfessor";

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
                // Novo
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