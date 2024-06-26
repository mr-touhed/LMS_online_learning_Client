import { Box, Button, Container, Stack, Typography } from "@mui/material";
import bg from "/images/bg.png"
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <Box style={{backgroundImage:`url(${bg})`} } sx={{minHeight:"60vh", objectFit:"cover", backgroundPosition:"center"}}>
            <Container sx={{display:"flex", alignItems:'center', height:"60vh"}} >
                    <Stack alignItems="baseline" gap={1} >
                    <Typography variant="h3">Learn Online. Anywhere . Anytime</Typography>
                    <Typography variant="caption">3000 specialists Industry experts. 2m+ Students.</Typography>
                        <Link to="/courses"><Button variant="contained" sx={{display:"block"}}>Start learning online</Button></Link>
                    </Stack>
            </Container>
        </Box>
    );
};

export default HeroSection;