import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
                <ScrollRestoration />
            </div>
        </div>
    );
};

export default Main;
