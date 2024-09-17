import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import ListarAluno from "../components/aluno/ListarAluno";
import CriarAluno from "../components/aluno/CriarAluno";
import EditarAluno from "../components/aluno/EditarAluno";
import AlunoCursos from "../components/aluno/CursosAlunos";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
        children: [
            {
                path:"alunos/listar",
                element:<ListarAluno />
            },
            {
                path:"alunos/criar",
                element:<CriarAluno />
            },
            {
                path:"alunos/editar/:id",
                element:<EditarAluno />
            },
            {
                path:"alunos/cursos",
                element:<AlunoCursos />
            }
        ]
    }
])

const Main = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default Main