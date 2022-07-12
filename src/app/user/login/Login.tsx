import {environment} from "../../environment";
import {Navigate} from "react-router-dom";

export function Login() {
    if (localStorage.getItem(environment.accessToken)) {
        return <Navigate to={"/"}/>
    }
    return (
        <a href={environment.discordAuthUrl}>Login</a>
    )
}