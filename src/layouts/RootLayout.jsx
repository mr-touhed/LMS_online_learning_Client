import  { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const RootLayout = () => {
    return (
        <>
        <header>
                <NavBar/>
        </header>
        <main style={{marginTop:"1rem"}} >
            <Outlet/>
        </main>
         <footer>
            
            
        </footer>  
        <Toaster/> 
        </>
    );
};

export default RootLayout;