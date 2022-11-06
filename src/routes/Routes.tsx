import { createBrowserRouter } from 'react-router-dom';
import Events from '../components/Events';
import Main from '../layout/Main';
import Home from '../pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/events', element: <Events /> },
        ],
    },
]);
