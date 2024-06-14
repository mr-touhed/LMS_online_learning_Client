import { Box, Container,  Typography, styled } from "@mui/material";


import { Link } from "react-router-dom";

const LatestCourse = ({courses}) => {
    
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
                    {
                        courses && courses?.map(course => <LatestCard key={course._id} course={course}/>)
                    }
                
                
                </Box>
                
        </Container>
    );
};

export default LatestCourse;




function LatestCard({course}){
    const {_id,thumb,title,catagory} = course
    return (
        <Link to={`/course/details/${_id}`} >
        <Box sx={{
            backgroundImage:`url(${thumb})`,
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
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="caption" sx={{textTransform:"uppercase"}}>{catagory} </Typography>

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
    gap:1.5rem;
    padding: 1rem;
    color: whitesmoke;
    flex-direction: column;
    justify-content: end;

`