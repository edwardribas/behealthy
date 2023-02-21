import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components/Header/Header";

// Pages
import { Treinos } from '../pages/Treinos/Treinos.jsx';
// import { Alimentacao } from "../pages/Alimentacao/Alimentacao.jsx";
import { NotFound } from '../pages/NotFound/NotFound';

// Router
const routes = [
    {
        path: '/',
        element: <Header/>,
        children: [
            {
                path: "/",
                element: <Treinos/>
            },
            {
                path: "alimentacao",
                element: <Treinos/>
                // element: <Alimentacao/>,
            },
            {
                path: "*",
                element: <NotFound/>,
            }
        ]
    },
]

export const router = createBrowserRouter(routes)