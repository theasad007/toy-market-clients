/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    // Google SIgnUp
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // Email/Pass Register
    const emailRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Email Login
    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    } 

    // Log Out
    const logOut = () => {
        return signOut(auth)
    }

    // Keep Track of Users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User', currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        googleLogin,
        emailRegister,
        emailLogin,
        logOut
    }
    useEffect(() => {
        AOS.init(

        );
      }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;