import { createBrowserRouter } from 'react-router-dom';
import Events from '../components/Events';
import Main from '../layout/Main';
import Activities from '../pages/Activities';
import EventPage from '../pages/EventPage';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/events', element: <Events limit={Infinity} /> },
            {
                path: '/events/:id',
                element: (
                    <PrivateRoute>
                        <EventPage />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://true-volunteer-server.vercel.app/events/${params.id}`
                    ),
            },
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
            {
                path: '/activities',
                element: (
                    <PrivateRoute>
                        <Activities />
                    </PrivateRoute>
                ),
            },
            // { path: '/admin_signin', element: <AdminSignIn /> },
            // {
            //     path: '/admin',
            //     element: (
            //         <PrivateRoute>
            //             <AdminPage />
            //         </PrivateRoute>
            //     ),
            // },
        ],
    },
]);
