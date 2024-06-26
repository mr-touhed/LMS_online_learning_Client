import { Button, FormControl,  InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useAuthentication from "../hooks/useAuthentication";
import { insert_course } from "../utils/tools";
import toast from "react-hot-toast";

const AddCourse = () => {
    const [course,setCourse] = useState({title:"",price:"",thumb:"",details:"", catagory:""});
   const {user,sign_out} = useAuthentication()
    const handelChange = (e) =>{
        setCourse(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const handel_submit = async (e) =>{
        e.preventDefault()
        const new_course = {...course, author_email:user.email}
        try {
            const result = await insert_course(new_course);
            if(result.status){
                toast(result.message);
                return setCourse({title:"",price:"",thumb:"",details:"", catagory:""})
            }else{
                toast(result.message)
                sign_out()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handel_submit}>
            <Typography variant="h4" textAlign="center">Add course</Typography>
            <Stack gap={4}>
            <TextField required id="outlined-basic" label="course title" variant="outlined"  name="title" value={course.title} onChange={(e)=>handelChange(e)}/>
            <TextField required id="outlined-basic" label="price" variant="outlined"  name="price" value={course.price} onChange={(e)=>handelChange(e)}/>
            <TextField required id="outlined-basic" label="thumb url" variant="outlined" name="thumb" value={course.thumb} onChange={(e)=>handelChange(e)}/>
            <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    required
                    name="details" value={course.details} onChange={(e)=>handelChange(e)}
                    />

                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">catagory</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            
                            label="catagory"
                            name="catagory" value={course.catagory} onChange={(e)=>handelChange(e)}
                        >
                            <MenuItem value="Design">Design</MenuItem>
                            <MenuItem value="Information">Information</MenuItem>
                            <MenuItem value="Intelligence">Intelligence</MenuItem>
                            <MenuItem value="Technology">Technology</MenuItem>
                        </Select>
                        </FormControl>


                        <Button type="submit" variant="contained">add course</Button>
            </Stack>
        </form>
    );
};

export default AddCourse;