import  { createBrowserRouter } from  "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import CourseDetails from "../pages/CourseDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import AddCourse from "../pages/AddCourse";
import CourseList from "../pages/CourseList";
import EnrollCourse from "../pages/EnrollCourse";
import Register from "../pages/Register";
import Login from "../pages/Login";
import VerifyRoute from "../verifyRoute/VerifyRoute";
import EditCourse from "../pages/EditCourse";
import { pathName } from "../utils/URL";
import Payment from "../pages/Payment";
import { send_token } from "../utils/tools";
import { ErrorBoundary } from "../components/ErrorBoundary";


export const routes = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        errorElement:<ErrorBoundary />,
        children:[
            {
                path:"/",
                index:true,
                element: <Home/>,
                loader:() => fetch(`${pathName}/courses`),
               
                
            },{
                path:"course/details/:id",
                element:<CourseDetails/>,
                loader:({params}) => fetch(`${pathName}/course/${params.id}`)
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"/course/enroll/:id",
                element: <VerifyRoute>
                    <Payment/>
                </VerifyRoute>
            },

            {
                path:"dashboard",
                element:
                <VerifyRoute>

                        <DashboardLayout/>
                </VerifyRoute>
                ,
                children:[
                    
                    {
                        path:"add-course",
                        element:<AddCourse/>
                    },
                    {
                        path:"my-courses",
                        element:<CourseList/>
                    },
                    {
                        path:"enroll-courses",
                        element:<EnrollCourse/>,
                        loader:() => fetch(`${pathName}/enroll`,{headers:send_token()})
                    },
                    {
                        path:"course/edit/:id",
                        element:<EditCourse/>,
                        loader:({params}) => fetch(`${pathName}/course/${params.id}`)
                    }

                ]
            }
        ]
    }
])