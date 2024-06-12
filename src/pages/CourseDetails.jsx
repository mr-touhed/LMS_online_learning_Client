import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import img from "/images/card_bg.jpg"
import teacherImg from "/images/teacher.png"
import TabDetails from "../components/details/TabDetails";
import { Link } from "react-router-dom";
const CourseDetails = () => {
    return (
       <Container>

<Grid container spacing={2}>
                <Grid item xs={8}>

                    <Stack gap={4}>
                    <Typography variant="h5">Design Information</Typography>
                    <Typography variant="h3">Design Dynamics</Typography>
                    
                    
                    
                    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis mollis risus. Praesent eu arcu pretium, dignissim massa eget, posuere orci.</Typography>

                    <Box sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        maxWidth:"600px"
                    }}>
                        <Button variant="contained">
                            <Link to={`/course/enroll/_id`}>TAKE THIS COURSE</Link>
                        </Button>
                        <Box sx={{fontSize:25,fontWeight:700}}>$19.00</Box>
                    </Box>


                    <Typography variant="h6">Total Duration :27 min </Typography>


                    <Box>
                        <TabDetails/>
                        </Box>
                    </Stack>
                    
         </Grid>
             <Grid item xs={4} sx={{height:"100%"}}>
                        <Stack justifyContent="space-between" gap={6} sx={{height:"100%"}}>

                            <img src={img} alt="" />
                            <Stack gap={4}>
                                <Typography variant="h4">About Instructor</Typography>
                                <Box sx={{
                                    display:"flex",
                                    gap:2,
                                    alignItems:"center"
                                }}>
                                    <Box>
                                    <Box 
                                    sx={{width:200}}
                                    component="img" src={teacherImg} alt="" />
                                    </Box>
                                    <Stack gap={2}>
                                    <Typography variant="body1">John Adam</Typography>
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