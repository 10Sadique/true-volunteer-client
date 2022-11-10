import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { AuthContext, IAuthContext } from '../contexts/AuthProvider';
import { useContext } from 'react';
import Spinner from '../components/Spinner';

const Main = () => {
    const { loading } = useContext(AuthContext) as IAuthContext;

    if (loading) {
        return (
            <div className="flex items-center justify-center my-56">
                <Spinner />
            </div>
        );
    }

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
