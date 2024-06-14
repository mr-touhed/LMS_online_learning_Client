import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { pathName } from "../utils/URL";
import { send_token } from "../utils/tools";
import useAuthentication from "../hooks/useAuthentication";


// eslint-disable-next-line react/prop-types
const VerifyRoute = ({children}) => {
  
    const [user, loading, ] = useAuthState(auth);
    const {sign_out} = useAuthentication();
    const loaction = useLocation();

    useEffect(()=>{
                fetch(`${pathName}/check_auth`,{method:"GET",headers:send_token()})
                .then(res =>{
                    if(!res.ok){
                        sign_out()
                    }else{
                        return res.json()
                    }
                })
                .then(data => data)
                .catch(err => console.log(err))
    },[sign_out])

    if(loading) return 
   
    if(!user) return <Navigate to={`/register`} state={{from:loaction.pathname}}/>
    return  children
   
};

export default VerifyRoute;