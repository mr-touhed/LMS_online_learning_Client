


import { Button, FormControl,  InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import {  useState } from "react";


import { useLoaderData } from "react-router-dom";
import { update_course } from "../utils/tools";
import toast from "react-hot-toast";

const EditCourse = () => {
    const {course:loaderData} = useLoaderData()
   
    const [course,setCourse] = useState(loaderData);
  

   
 
    const handelChange = (e) =>{
        setCourse(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const handel_submit = async (e) =>{
        e.preventDefault()
       const update_data = {
                title:course.title,
                price:course.price,
                thumb:course.thumb,
                details:course.details,
                catagory:course.catagory
       }
       try {
        const result = await update_course(course._id,update_data);
        if(result.status){
            toast(result.message)
        }else{
            toast(result.message)
        }
       } catch (error) {
            console.log(error);
       }
    }

    return (
        <form onSubmit={handel_submit}>
            <Typography variant="h4" textAlign="center">Edit course</Typography>
            <Stack gap={4}>
            <TextField id="outlined-basic" label="course title" variant="outlined"  name="title" value={course.title} onChange={(e)=>handelChange(e)}/>
            <TextField id="outlined-basic" label="price" variant="outlined"  name="price" value={course.price} onChange={(e)=>handelChange(e)}/>
            <TextField id="outlined-basic" label="thumb url" variant="outlined" name="thumb" value={course.thumb} onChange={(e)=>handelChange(e)}/>
            <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    
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


                        <Button type="submit" variant="contained">update course</Button>
            </Stack>
        </form>
    );
};

export default EditCourse;

