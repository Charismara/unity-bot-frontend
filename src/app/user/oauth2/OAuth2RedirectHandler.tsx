import {useSearchParams, Navigate} from "react-router-dom";
import {environment} from "../../environment";

export function OAuth2RedirectHandler() {
    const [params, setParams] = useSearchParams();
    if (params.has("token")) {
        localStorage.setItem(environment.accessToken, params.get('token')!)
        return <Navigate to={"/profile"}/>
    } else {
        if (params.has('error')) {
            console.log("Login Error:", params.get('error'));
        }
        return <Navigate to={"/home"}/>
    }
}

export default OAuth2RedirectHandler;