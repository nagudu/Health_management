import { useRoutes } from "react-router-dom";
import SingIn from "../Componet/SingIn";

function AppNavigation() {
    let element = useRoutes([
    {
        path:'/',
        element: <SingIn />
    }
    ])

    return element;
}
export default AppNavigation;