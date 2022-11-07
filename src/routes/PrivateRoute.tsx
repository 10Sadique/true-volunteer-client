import { FC, ReactNode, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext, IAuthContext } from '../contexts/AuthProvider';

type IPrivateRoute = {
    children: ReactNode;
};

const PrivateRoute: FC<IPrivateRoute> = ({ children }): any => {
    const { user, loading } = useContext(AuthContext) as IAuthContext;
    const location = useLocation();

    if (!user) {
        return <Navigate to={`/signin`} state={{ from: location }} replace />;
    }

    if (loading) {
        return (
            <div className="my-24 text-center font-bold text-cyan-600 text-2xl">
                <p>Loading...</p>
            </div>
        );
    }

    return children;
};

export default PrivateRoute;
