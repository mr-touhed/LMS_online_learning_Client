import { Container, Grid } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../components/AllCourses/CourseCard";


const AllCourses = () => {
    const {data} = useLoaderData()
   
    return (
        <Container>
            <Grid container spacing={2}>
                {data.map(course => <Grid key={course._id} item xs={4}> 
                        <CourseCard course={course}/>  
                    </Grid>)}
            </Grid>
        </Container>
    );
};

export default AllCourses;