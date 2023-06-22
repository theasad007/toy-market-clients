import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import AddAToy from "../Pages/AddAToy/AddAToy";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-toys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://kids-zone-server-beta.vercel.app/all-toys')
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://kids-zone-server-beta.vercel.app/toy/${params.id}`)
            },
            {
                path: '/my-toys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/update-toy/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({params}) => fetch(`https://kids-zone-server-beta.vercel.app/toy/${params.id}`)
            },
            {
                path: '/add-a-toy',
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }

        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;