import { createContext, FC, ReactNode, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, User } from 'firebase/auth';

type IAuthProvider = {
    children: ReactNode;
};

export interface IAuthContext {
    user: User | undefined;
    loading: boolean;
}

const auth = getAuth(app);

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);

    const authInfo: IAuthContext = {
        user,
        loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
