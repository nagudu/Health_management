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
import Dashboard from "../Componet/Dashboard";
import AppointmentTable from "../Componet/AppointmentTable";
import PatientTable from "../Componet/PatientTable";
import Priscription from "../Componet/Priscription";

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
        {
            path:'/dashboard',
            element:<Dashboard />
        },
        {
            path:'/apoint-table',
            element:<AppointmentTable />
        },
        {
            path:'/patient-table',
            element:<PatientTable />
        },
        {
            path:'/priscription',
            element:<Priscription />
        },
    ])

    return element;
}
export default AppNavigation;