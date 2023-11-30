import { useRoutes } from "react-router-dom";
import SingIn from "../Componet/SingIn";
import Home from "../Componet/Home";

function AppNavigation() {
    let element = useRoutes([
    {
        path:'/',
        element:<Home />
    }
    ])

    return element;
}
export default AppNavigation;