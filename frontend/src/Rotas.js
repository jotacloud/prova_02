import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../src/pages/Home";
import ListarAluno from "../src/components/aluno/ListarAluno";
import CriarAluno from "../src/components/aluno/CriarAluno";
import EditarAluno from "../src/components/aluno/EditarAluno";
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
                path:"alunos/editar",
                element:<EditarAluno />
            },
        ]
    }
])

const Main = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default Main