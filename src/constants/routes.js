import Home from '../views/Home';
import Daily from "../views/Daily";
import Login from '../views/Login';

export const routes = [
    {
        path:'/',
        element: <Login />
    },
    {
        path:'/home',
        element: <Home />
    },
    {
        path:'/daily',
        element: <Daily />
    }
]