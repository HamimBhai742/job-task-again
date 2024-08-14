import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Register from "../Pages/SignUp/Register";
import Login from "../Pages/SignIn/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/product',
                element: <Products></Products>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/add-product',
                element:<AddProduct></AddProduct>
            },
        ]
    },
]);
export default router;