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
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const auth = getAuth(app);

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    console.log(user);

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
        if (auth.currentUser !== null)
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: image,
            });
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
        setLoading,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
