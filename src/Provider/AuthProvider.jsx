import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import app from "../Fairbase/firebase.config";
import axios from "axios";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            const userEmail = currentUser?.email || user?.email;
            const looggedUser = { email: userEmail};
            setUser(currentUser);
            //console.log('current User', currentUser);
            setLoading(false);
            // if user exist then token
            if(currentUser){                
                axios.post('https://sabfitzone-server.vercel.app/jwt', looggedUser, {withCredentials: true})
                .then(res => {
                    //console.log('token response', res.data);
                })
            }
            else{
                axios.post('https://sabfitzone-server.vercel.app/logout', looggedUser, {withCredentials: true})
                .then(res => {console.log(res.data)});
            }
        });
        return () => {
            return unsubscribe();
        }
    },[]);

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const authInfo ={
        user, loading, createUser, signIn, signInWithGoogle, logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;