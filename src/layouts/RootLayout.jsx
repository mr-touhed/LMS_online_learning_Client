import  { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <>
        <header>
                <NavBar/>
        </header>
        <main  style={{marginTop:"1rem", minHeight:"calc(55vh)"}} >
            <Outlet/>
        </main>
         <footer>
            
            <Footer/>
        </footer>  
        <Toaster/> 
        </>
    );
};

export default RootLayout;