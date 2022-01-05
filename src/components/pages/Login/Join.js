import React, { useState } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Join = () => {
    const history = useHistory()
    const location = useLocation()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {userRegister,err,setErr,facebookSignIn,googleSignIn,setIsLoading,verifyEmail,userProfile} = useAuth()
    const googleIcon = <i className="fab fa-google-plus-g"></i>
    const facebookIcon = <i className="fab fa-facebook-f"></i>
    const redirect_url = location.state?.from || '/home'

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            history.push(redirect_url)
            setErr('')
        }).catch(error=>{
            setErr(error.message)
        }).finally(()=>{
            setIsLoading(false)
        })
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
        .then(result=>{
            history.push(redirect_url)
            setErr('')
        }).catch(error=>{
            setErr(error.message)
        }).finally(()=>{
            setIsLoading(false)
        })
    }

    const handleNameField = (e) => {
        setName(e.target.value)
    }
    const handleEmailField = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleRegisterForm = e => {
        e.preventDefault()
        if(/(?=.*[0-9].*[0-9])/.test(name)){
            setErr('Your Name must be Character not Number')
            return
        }
        if(/(?=.*[!@#$&*_])/.test(name)){
            setErr('Your Name Must be Character Not Special Character')
            return
        }
        if(password.length < 6){
            setErr('Password Must be at least 6 character')
            return
        }
        if(!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)){
            setErr('Password Contain must have 3 Characters')
            return
        }
        if(!/(?=.*[!@#$&*_])/.test(password)){
            setErr('Password Contain Must have Special Character')
            return
        }
        if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setErr('Password Must have 2 Numbers')
            return
        }

        userRegister(name,email,password)
        .then(result => {
            verifyEmail()
            userProfile(name)
            history.push(redirect_url)
            setErr('')
        }).catch(error=>{
            setErr(error.message)
        }).finally(()=>{
            setIsLoading(false)
        })
    }

    return (
        <div id="join" className="pt-28">
            <div className="py-28 border-b-2">
                <div className="flex w-full lg:mt-0 justify-center items-center bg-white">
                    <div>
                        <form className="bg-white" onSubmit={handleRegisterForm}>
                            <h1 className="text-stone-500 font-bold text-2xl mb-1 text-center">REGISTRATION</h1>
                            <p className="text-sm font-normal text-rose-400 mb-7 text-center">UNICLINIC</p>
                            <p className="text-sm font-normal text-rose-400 mb-7 text-center">{err}</p>
                            <div className="flex items-center border-2 border-stone-400 py-2 px-3 rounded-2xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <input onBlur={handleNameField} className="pl-2 outline-none border-none text-pink-400 font-bold" type="text" name="" id="" placeholder="Your Name" required />
                            </div>
                            
                            <div className="flex items-center border-2 border-stone-400 py-2 px-3 rounded-2xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <input onBlur={handleEmailField} className="pl-2 outline-none border-none text-pink-400 font-bold" type="email" name="" id="" placeholder="Email Address" required />
                            </div>
                            <div className="flex items-center border-2 border-stone-400 py-2 px-3 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <input onBlur={handlePassword} className="pl-2 outline-none border-none text-pink-400 font-bold" type="password" name="" id="" placeholder="Password" required />
                            </div>
                            <button type="submit" className="block w-full bg-stone-500 border-b-2 border-white hover:bg-white hover:text-stone-500 mt-4 py-2 rounded-2xl text-white font-bold mb-2 ease-in-out duration-700 shadow-lg shadow-stone-300">JOIN</button>
                        </form>
                        <button onClick={handleGoogleSignIn} type="submit" className="block w-full bg-stone-500 border-b-2 border-white hover:bg-white hover:text-stone-500 mt-4 py-2 rounded-2xl text-white font-bold mb-2 ease-in-out duration-700 shadow-lg shadow-stone-300">{googleIcon} SignIn With Google</button>

                        <button onClick={handleFacebookSignIn} className="block w-full bg-sky-500 border-b-2 border-white hover:bg-white hover:text-sky-500 mt-4 py-2 rounded-2xl text-white font-bold mb-2 ease-in-out duration-700 shadow-lg shadow-blue-200">{facebookIcon} - SignIn With Facebook</button>

                        <Link to="/login" className="text-sm ml-2 text-rose-400 hover:text-pink-500 cursor-pointer ">Already Have an Account ?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;