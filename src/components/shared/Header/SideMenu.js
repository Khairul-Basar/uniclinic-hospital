import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink,HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const SideMenu = (props) => {
    const hideMenu = props.hideMenu
    const {user,setErr,logOut} = useAuth()
    const handleClick = () => {
        setErr('')
        hideMenu()
    }

    return (
        <div className="lg:hidden fixed h-screen bg-stone-500 opacity-95 w-9/12 overflow-hidden">
            <div className="grid grid-col-1 gap-4 py-5 w-9/12 mx-auto">
                
                <div className="collapse collapse-plus text-white rounded-lg">
                    <input type="checkbox"/> 
                    <div className="collapse-title font-bold ">
                        Home
                    </div> 
                    
                    <div className="collapse-content pl-8 text-center ease-in-out duration-700"> 
                        <p className="my-5"><NavHashLink smooth to="/home#top" onClick={hideMenu} className="px-12 rounded-full bg-stone-700 py-2">Home-Top</NavHashLink></p>
                        <p className="mt-2"><NavHashLink smooth to="/home#urgent-care" onClick={hideMenu} className="px-9 rounded-full bg-stone-700 py-2">Home-Urgent</NavHashLink></p>

                        <p className="mt-5"><NavHashLink smooth to="/home#supportive" onClick={hideMenu} className="px-11 rounded-full bg-stone-700 py-2">Supportive</NavHashLink></p>

                        <p className="mt-5"><NavHashLink smooth to="/home#services" onClick={hideMenu} className="px-11 rounded-full bg-stone-700 py-2">Services</NavHashLink></p>

                        <p className="mt-5"><NavHashLink smooth to="/home#doctors" onClick={hideMenu} className="px-11 rounded-full bg-stone-700 py-2">Doctors</NavHashLink></p>

                        <p className="mt-5"><NavHashLink smooth to="/home#online-meet" onClick={hideMenu} className="px-11 rounded-full bg-stone-700 py-2">Virtual-Meet</NavHashLink></p>

                        <p className="mt-5"><NavHashLink smooth to="/home#insurance" onClick={hideMenu} className="px-11 rounded-full bg-stone-700 py-2">Insurance</NavHashLink></p>
                        <p className="mt-5"><NavHashLink smooth to="/home#appoinment" onClick={hideMenu} className="px-11 rounded-full bg-stone-700 py-2">Appointment</NavHashLink></p>
                    </div>
                    
                </div>
                <NavHashLink smooth to="/departments#all-services" onClick={hideMenu} className="text-md ml-3 font-bold text-white">Services</NavHashLink> 
                <NavHashLink smooth to="/doctors#all-doctors" onClick={hideMenu} className="text-md ml-3 font-bold text-white">Doctors</NavHashLink>
                <NavHashLink smooth to="/contact#contact" onClick={hideMenu} className="text-md ml-3 font-bold text-white">Contact</NavHashLink>

                {
                    !user.email ?
                    <>
                        
                        <NavHashLink onClick={handleClick} to="/login#login" className="text-md ml-3 font-bold text-white bg-stone-600 text-center py-2 border-b-2 rounded-full">Login</NavHashLink>
                    
                    
                        <NavHashLink onClick={handleClick} to="/join#join" className="text-md ml-3 font-bold text-white bg-stone-600 text-center py-2 border-b-2 rounded-full">Join</NavHashLink>
                        
                        
                    </>
                    : <button onClick={logOut} className="text-md ml-3 font-bold text-white bg-stone-600 text-center py-2 border-b-2 rounded-full">SignOut</button>
                }
                
            </div>
        </div>
    );
};

export default SideMenu;