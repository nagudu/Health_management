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
import About from "../Componet/About";
import Service from "../Componet/Service";
import NewFile from "../Componet/NewFile";

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
        {
            path:'/about',
            element:<About />
        },
        {
            path:'/service',
            element:<Service />
        },
        {
            path:'/file',
            element:<NewFile />
        },
    ])

    return element;
}
export default AppNavigation;