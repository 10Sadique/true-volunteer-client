import { createBrowserRouter } from 'react-router-dom';
import Events from '../components/Events';
import Main from '../layout/Main';
import EventPage from '../pages/EventPage';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/events', element: <Events /> },
            { path: '/events/:id', element: <EventPage /> },
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
        ],
    },
]);
