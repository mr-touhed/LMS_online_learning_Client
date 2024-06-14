import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import img from "/images/register.jpg"
import useAuthentication from "../hooks/useAuthentication";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { set_token_fromServer } from "../utils/tools";
const Login = () => {
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        sign_loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const {gooleSign,} = useAuthentication()
    const [createuser,setCreateuser] = useState({ email:"",password:""})


    const handel_change = (e) =>{
        setCreateuser(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    
    const hahdel_submit = async (e)=>{
        e.preventDefault()
        const login_user = await signInWithEmailAndPassword(createuser.email,createuser.password);
       
        if(!sign_loading && !login_user){
            
            toast('Firebase: Error (auth/invalid-credential).')
        }else{
            const setToken = await set_token_fromServer({email:createuser.email});
               if(setToken){

                if(location.state){
                   return  navigate(location.state?.from, {replace:true})
                   }else{
                        return  navigate("/")
                   }
               }
        }
    }

    return (
       <Container>
                 <Grid container spacing={4} alignItems="center">
            <Grid item md={6}>
                    <Box component="img" src={img} maxWidth="100%"/>
                </Grid>
            <Grid item md={6}  >
                        <form onSubmit={hahdel_submit}>
                                <Stack gap={4}>
                              
                                <TextField id="outlined-basic" label="email" variant="outlined" name="email" value={createuser.email} onChange={(e)=>handel_change(e) } required/>
                                <TextField id="outlined-basic" label="password" variant="outlined" name="password" value={createuser.password} onChange={(e)=>handel_change(e) } required/>
                                
                                <Button type="submit" variant="contained">{sign_loading ?"processing...": "Login now"}</Button>
                                </Stack>
                        
                        </form>
                        <Button onClick={gooleSign} variant="outlined" fullWidth sx={{mt:4}}> sign in with google</Button>
                        <Typography  textAlign="center" variant="caption">if you don't have any account please  <Link to="/register" style={{color:"blue", textDecoration:"underline"}}>register</Link></Typography>
                </Grid>
        </Grid>
       </Container>
    );
};

export default Login;