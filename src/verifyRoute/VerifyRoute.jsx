import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { Navigate, useLocation } from "react-router-dom";


const VerifyRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const loaction = useLocation()
    if(loading) return 
   
    if(!user) return <Navigate to={`/register`} state={{from:loaction.pathname}}/>
    return  children
   
};

export default VerifyRoute;