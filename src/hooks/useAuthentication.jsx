
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSignOut, useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase.config';
import { useState } from 'react';
import { insert_user, set_token_fromServer } from '../utils/tools';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const useAuthentication = () => {
    const location = useLocation()
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [signOut, ] = useSignOut(auth);
   
    const [
        createUserWithEmailAndPassword,
        createUser,
        create_loading,
        create_error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const gooleSign = async () =>{
            try {
                const sign_user = await signInWithGoogle();
                if(sign_user){
                    
                    const register_user = {name:sign_user.user.displayName,email:sign_user.user.email,img:sign_user.user.photoURL}
                                    const insert_user_in_Db = await insert_user(register_user);
                        if(insert_user_in_Db.status){
                            const setToken = await set_token_fromServer({email:sign_user.user.email});
                            if(setToken){
             
                             if(location.state){
                                return  navigate(location.state?.from, {replace:true})
                                }else{
                                     return  navigate("/")
                                }
                            }
                        }else{
                            toast(insert_user_in_Db.message)
                        }
                }
            } catch (error) {
                console.log({error});
            }
      }

      const create_new_user =async  (user) =>{
            const {name,email,password,imgUrl} = user
            setLoading(true)
                    try {
                        const create_user =  await  createUserWithEmailAndPassword(email,password)
                         
                            if(create_user){
                               
                               const success  =  await updateProfile({ displayName:name, photoURL:imgUrl })
                               if(success){
                                    const register_user = {name:create_user.user.displayName,email:create_user.user.email,img:create_user.user.photoURL}
                                    const insert_user_in_Db = await insert_user(register_user);
                                    if(insert_user_in_Db.status){


                                        const setToken = await set_token_fromServer({email:create_user.user?.email});
                                        if(setToken){

                                            if(location.state){
                                            return  navigate(location.state?.from, {replace:true})
                                            }else{
                                                    return  navigate("/")
                                            }
                                        }
                                    }else{
                                        toast(insert_user_in_Db.message)
                                    }


                                
                                
                               }
                               
                               
                            }
                            if(create_error){
                                setLoading(false)
                                return toast(create_error.message)
                            }
                    } catch (error) {
                        console.log("error create user", error);
                    }
      }
      const sign_out = async()=>{
                 signOut();
                localStorage.clear()
      }
    return (
        {create_new_user,gooleSign,sign_out, loading,user}
    );
};

export default useAuthentication;