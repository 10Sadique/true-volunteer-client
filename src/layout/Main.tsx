import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl mx-auto my-20">
                <Outlet />
                <ScrollRestoration />
            </div>
        </div>
    );
};

export default Main;
