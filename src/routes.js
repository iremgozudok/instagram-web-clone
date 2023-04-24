import AuthLayout from "pages/auth";
import Home from "pages/home";
import Login from "pages/login";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: {
            path: "/login",
            element: <Login />
        }
    }
]

export default routes