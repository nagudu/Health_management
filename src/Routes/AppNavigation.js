import { useRoutes } from "react-router-dom";
import SingIn from "../Componet/SingIn";
import Home from "../Componet/Home";
import Admin from "../Componet/Admin";
import Doctor from "../Componet/Doctor";
import SingUp from "../Componet/SingUp";
import Patient from "../Componet/Patient";
import Appointement from "../Componet/Appointement";
import Reception from "../Componet/Reception";
import Card from "../Componet/Card";
import Contact from "../Componet/Contact";

function AppNavigation() {
    let element = useRoutes([
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/admin',
            element:<Admin />
        },
        {
            path:'/doctor',
            element:<Doctor />
        },
        {
            path:'/singup',
            element:<SingUp />
        },
        {
            path:'/patient',
            element:<Patient />
        },
        {
            path:'/appointement',
            element:<Appointement />
        },
        {
            path:'/reception',
            element:<Reception />
        },
        {
            path:'/card',
            element:<Card />
        },
        {
            path:'/contact',
            element:<Contact />
        },
    ])

    return element;
}
export default AppNavigation;