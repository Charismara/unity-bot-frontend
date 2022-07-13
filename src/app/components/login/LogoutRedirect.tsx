import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../api/accountingSlice";

export function LogoutRedirect() {
    const dispatch = useDispatch();
    dispatch(logout())
    return <Navigate to={"/home"}/>
}