import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    User,
    UserCredential,
} from 'firebase/auth';
import { sign } from 'crypto';

type IAuthProvider = {
    children: ReactNode;
};

export interface IAuthContext {
    user: User | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    signUp: (email: string, password: string) => Promise<UserCredential>;
    updateUser: (name: string, image: string) => Promise<void> | undefined;
    logOut: () => Promise<void>;
}

const auth = getAuth(app);

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const signIn = (email: string, password: string) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signUp = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (name: string, image: string) => {
        setLoading(true);
        if (user !== null)
            return updateProfile(user, { displayName: name, photoURL: image });
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (presentUser) => {
            setUser(presentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo: IAuthContext = {
        user,
        loading,
        signIn,
        signUp,
        updateUser,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
