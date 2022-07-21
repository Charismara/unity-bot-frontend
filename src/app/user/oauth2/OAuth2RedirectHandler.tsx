import {Navigate, useParams} from "react-router-dom";
import {environment} from "../../environment";

export function OAuth2RedirectHandler() {
    const {token, error} = useParams();
    console.log(token);
    if (token !== undefined) {
        localStorage.setItem(environment.accessToken, token);
        return <Navigate to={"/profile"}/>
    } else {
        if (error !== undefined) {
            console.log("Login Error:", error);
        }
        return <Navigate to={"/home"}/>
    }
}

export default OAuth2RedirectHandler;