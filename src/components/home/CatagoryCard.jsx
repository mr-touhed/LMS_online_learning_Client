import { Box, Container, Stack, Typography } from "@mui/material";
import image1 from "/images/c1.jpg"
import image2 from "/images/english_service_type.png"
import image3 from "/images/c4.jpg"
import image4 from "/images/dancing_service_type.png"
const catagories = [
    {
        name:"Design",
        details:"180 Courses . 1200 + Students",
        bgimg:image1
    },
    {
        name:"Technology",
        details:"100 + Univ. Accredited",
        bgimg:image2
    },
    {
        name:"Information",
        details:"chose from 120+ Topics",
        bgimg:image3
    },
    {
        name:"intelligence",
        details:"AI, cognitive Learning +more",
        bgimg:image4
    }
]
const CatagoryCard = () => {
    return (
        <Container >
                <Stack flexDirection="row" gap={3} sx={{overflowX:{sm:"scroll", md:"hidden"}}}> 
                    {
                        catagories.map((catagory,index) => <Card key={index} catagory={catagory} />)
                    }
                </Stack>
        </Container>
    );
};

export default CatagoryCard;


function Card ({catagory}){
    const {name,details,bgimg} = catagory
    return (
        <Stack sx={{backgroundImage:`url(${bgimg})`, 
        backgroundPosition:"center", 
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height:"88px",
        minWidth:"250px",
        width:"100%"
        }}
        p={1.2}
        justifyContent="center"
        borderRadius={1}
        color="whitesmoke"
        >
            <Typography variant="body1">{name}</Typography>
            <Typography variant="caption">{details}</Typography>
        </Stack>
    )
}