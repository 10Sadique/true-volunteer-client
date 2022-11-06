import { Outlet, ScrollRestoration } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Outlet />
            <ScrollRestoration />
        </div>
    );
};

export default Main;
