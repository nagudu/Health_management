import { useRoutes } from "react-router-dom";
import SingIn from "../Componet/SingIn";
import Home from "../Componet/Home";

function AppNavigation() {
    let element = useRoutes([
    {
        path:'/',
        element:<h1>88888</h1>
    }
    ])

    return element;
}
export default AppNavigation;