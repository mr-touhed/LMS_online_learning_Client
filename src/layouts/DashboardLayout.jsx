import { Outlet } from "react-router-dom";
import DashMenu from "../components/dashboard/DashMenu";
import { Container, Grid } from "@mui/material";


const DashboardLayout = () => {
    return (
        <Container>
            
            
            <Grid container spacing={2}>
                 <Grid item xs={12}  md={2}  sx={{borderInlineEnd:"1px solid gray",}} >
                 <DashMenu/>
  </Grid>
  <Grid item xs={12} md={10}>
  <Outlet/>
  </Grid>
            </Grid>
        </Container>
    );
};

export default DashboardLayout;