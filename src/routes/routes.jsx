import { createBrowserRouter, Outlet } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import NotFoundPages from '../pages/NotFoundPage';
import Header from "../components/Header";
import Footer from "../components/Footer";
import App from "../App";

export const router = createBrowserRouter([{
    element: (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    ),
    children: [{
        path: '/',
        element:<App/>,
    }, 
    {
        path:'*',
        element: <NotFoundPages />,
    },
    {
        element: <PrivateRoute/>,
        children:[{
            //private route
        }]
    }
    //all routes
]
}]);