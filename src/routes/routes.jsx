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
import Enroll from "../pages/Enroll";


export const routes = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children:[
            {
                path:"/",
                index:true,
                element: <Home/>,
            },{
                path:"course/details/:id",
                element:<CourseDetails/>
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
                    <Enroll/>
                </VerifyRoute>
            },

            {
                path:"dashboard",
                element:<DashboardLayout/>,
                children:[
                    {
                        path:"my-course-list",
                        element:"couser list"
                    },
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
                        element:<EnrollCourse/>
                    },

                ]
            }
        ]
    }
])