import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase.config';


export const AuthContest = createContext(null);
const auth= getAuth(app);

/////////////////////////////////////////
const AuthProvider = ({children}) => {

    const[user, setUser] = useState({})
    const[loading, setLoading] = useState(true);

    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser);
            setLoading(false);
       });
       return()=> {
           unsubscribe();
       }
   },[])

    const authInfo={
        createUser,
        signIn,
        logOut,
        user,
        loading
    }

   

    return (
        <div>
            <AuthContest.Provider value={authInfo}>
                {children}
            </AuthContest.Provider>
            
        </div>
    );
};

export default AuthProvider;