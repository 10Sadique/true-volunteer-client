import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl mx-auto my-20">
                <Outlet />
                <ScrollRestoration />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
