import { Stack } from "@mui/material";
import CatagoryCard from "../components/home/CatagoryCard";
import HeroSection from "../components/home/HeroSection";
import LatestCourse from "../components/home/LatestCourse";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const {data} = useLoaderData();
    
    return (
        <Stack gap={3}>
           <HeroSection/>
           <CatagoryCard/>
           <LatestCourse courses={data}/>
        </Stack>
    );
};

export default Home;