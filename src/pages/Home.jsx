import { Stack } from "@mui/material";
import CatagoryCard from "../components/home/CatagoryCard";
import HeroSection from "../components/home/HeroSection";
import LatestCourse from "../components/home/LatestCourse";


const Home = () => {
    return (
        <Stack gap={3}>
           <HeroSection/>
           <CatagoryCard/>
           <LatestCourse/>
        </Stack>
    );
};

export default Home;