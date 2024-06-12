import { Box, Container,  Typography, styled } from "@mui/material";

import card_bg from "/images/card_bg.jpg"
import { Link } from "react-router-dom";

const LatestCourse = () => {
    return (
        <Container>
                <Typography variant="h4"> Our Latest Courses</Typography>

                <Box 
                sx={{
                    display:"grid",
                    gridTemplateColumns:{md:"repeat(4,1fr)", sm:"1fr"},
                    gap:"2rem"
                }}
                >
                <LatestCard/>
                <LatestCard/>
                <LatestCard/>
                <LatestCard/>
                <LatestCard/>
                </Box>
                
        </Container>
    );
};

export default LatestCourse;




function LatestCard(){
    return (
        <Link to={`/details`} >
        <Box sx={{
            backgroundImage:`url(${card_bg})`,
            minHeight:"225px",
            maxWidth:"450px",
            width:"100%",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            position:"relative",
            borderRadius:"5px",
            overflow:"hidden"
            
        }}>
            <Content>
                    <Typography variant="h2">hello</Typography>
                    <Typography variant="h6" sx={{textTransform:"uppercase"}}>Design </Typography>

            </Content>

        </Box>
        
        </Link>
    )
}

const Content = styled('div')`
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #04284b 0%, rgba(165, 161, 219, 0.0985644257703081) 90%);
    display: flex;
    align-items: flex-start;
    padding: 1rem;
    color: whitesmoke;
    flex-direction: column;
    justify-content: end;

`