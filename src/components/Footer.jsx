import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box bgcolor="#0A3765" height="30vh" mt={4}>
                    <Container  sx={{display:'flex', justifyContent:"center", alignItems:"end", height:"100%", p:"1rem" }}>
                            <Typography color="white">copyright @2024 Knowledge online plateform</Typography>

                    </Container>
        </Box>
    );
};

export default Footer;