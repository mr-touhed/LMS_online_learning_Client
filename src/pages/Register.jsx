import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import img from "/images/register.jpg"
import useAuthentication from "../hooks/useAuthentication";
import { useState } from "react";

import { Link,   } from "react-router-dom";

const Register = () => {


    const {gooleSign,create_new_user} = useAuthentication()
    const [createuser,setCreateuser] = useState({name:"", email:"",password:"",imgUrl:""})
  
  
    const handel_change = (e) =>{
        setCreateuser(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
  
    const hahdel_submit = async (e)=>{
        e.preventDefault()
       create_new_user(createuser);
     
    }
  
    return (
       <Container>
                 <Grid container spacing={4} alignItems="center">
            <Grid item md={6}>
                    <Box component="img" src={img} maxWidth="100%"/>
                </Grid>
            <Grid item md={6} height="100%" >
                        <form onSubmit={hahdel_submit}>
                                <Stack gap={4}>
                                <TextField id="outlined-basic" label="user name" variant="outlined" name="name" value={createuser.name} onChange={(e)=>handel_change(e) } required/>
                                <TextField id="outlined-basic" label="email" variant="outlined" name="email" value={createuser.email} onChange={(e)=>handel_change(e) } required/>
                                <TextField id="outlined-basic" label="password" variant="outlined" name="password" value={createuser.password} onChange={(e)=>handel_change(e) } required/>
                                <TextField id="outlined-basic" label="profile image url" variant="outlined" name="imgUrl" value={createuser.imgUrl} onChange={(e)=>handel_change(e) } required/>
                                <Button type="submit" variant="contained">register</Button>
                                </Stack>
                        
                        </form>
                        <Button onClick={gooleSign} variant="outlined" fullWidth sx={{mt:4}}> sign in with google</Button>
                        <Typography  textAlign="center" variant="caption">if you alrady have any account please  <Link to="/login" style={{color:"blue", textDecoration:"underline"}}>login</Link></Typography>
                </Grid>
        </Grid>
       </Container>
    );
};

export default Register;