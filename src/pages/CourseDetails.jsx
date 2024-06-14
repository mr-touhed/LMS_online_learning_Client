import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import TabDetails from "../components/details/TabDetails";
import { Link, useLoaderData } from "react-router-dom";
const CourseDetails = () => {
    const {course} = useLoaderData()
    const {catagory,details,price,thumb,title,_id,author} = course
    return (
       <Container>

<Grid container spacing={2}>
                <Grid item xs={12} md={8}>

                    <Stack gap={4}>
                    <Typography variant="h5">{catagory}</Typography>
                    <Typography variant="h4"> {title}</Typography>
                    
                    
                    
                    <Typography variant="body2">{details}</Typography>

                    <Box sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        maxWidth:"600px",
                        flexDirection:{xs:"column", md:"row"}
                    }}>
                        <Button variant="contained">
                            <Link to={`/course/enroll/${_id}`}>TAKE THIS COURSE</Link>
                        </Button>
                        <Box sx={{fontSize:25,fontWeight:700}}>{price}$</Box>
                    </Box>


                    <Typography variant="h6">Total Duration :27 min </Typography>


                    <Box>
                        <TabDetails/>
                        </Box>
                    </Stack>
                    
         </Grid>
             <Grid item xs={12} md={4} sx={{height:"100%"}}>
                        <Stack justifyContent="space-between" gap={6} sx={{height:"100%"}}>

                            <img src={thumb} alt="" />
                            <Stack gap={4}>
                                <Typography variant="h4">About Instructor</Typography>
                                <Box sx={{
                                    display:"flex",
                                    flexDirection:{xs:"column",md:"row"},
                                    gap:2,
                                    alignItems:"center"
                                }}>
                                    <Box>
                                    <Box 
                                    sx={{width:200}}
                                    component="img" src={author.img} alt="" />
                                    </Box>
                                    <Stack gap={2}>
                                    <Typography variant="body1">{author.name}</Typography>
                                    There are many variations of passages of Lorem Ipsum available.
                                    <Button variant="outlined">
                                    View Profile
                                    </Button>
                                    </Stack>
                                </Box>
                            </Stack>
                            </Stack>
            </Grid>

        </Grid>
       </Container>

    );
};

export default CourseDetails;