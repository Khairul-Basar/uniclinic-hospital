
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../pages/Login/Firebase/firebase.init";


firebaseAuthentication()
const useFirebase = () => {
    const [user,setUser] = useState({})
    const [err,setErr] = useState('')
    const [isLoading,setIsLoading] = useState(true)
    const auth = getAuth()

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed
    },[])


    const userRegister = (fullName,email,password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userProfile = (name) =>{
        updateProfile(auth.currentUser,{
            displayName:name
        }).then(()=> {
            setErr('')
        }).catch(error=> {
            setErr(error.message)
        })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            setErr('')
        }).catch(error=>{
            setErr(error.message)
        })
    }

    const userLogin = (email,password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
        
    }

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            setErr('')
        }).catch(error=>{
            setErr(error.message)
        })
    }

    const facebookSignIn = () => {
        setIsLoading(true)
        const facebookProvider = new FacebookAuthProvider()
        return signInWithPopup(auth,facebookProvider)
        
    }

    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider)
        
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(()=>{
            setUser({})
            setErr('')
        }).catch(error=>{
            setErr(error.message)
        }).finally(()=>{
            setIsLoading(false)
        })
    }

    return {
        user,
        setUser,
        userRegister,
        verifyEmail,
        googleSignIn,
        facebookSignIn,
        userLogin,
        resetPassword,
        logOut,
        err,
        setErr,
        isLoading,
        setIsLoading,
        verifyEmail,
        userProfile
    }
}
export default useFirebase