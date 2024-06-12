import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import RootLayout from "./layouts/RootLayout";
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
const App = () => {
  return (
    <RouterProvider router={routes}>
            <RootLayout/>
    </RouterProvider>
  );
};

export default App;