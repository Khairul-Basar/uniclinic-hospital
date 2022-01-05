import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavHashLink,HashLink } from 'react-router-hash-link';
import cliniclogo from '../../../images/Logo/uniclinic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import SideMenu from './SideMenu';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const menuIcon = <FontAwesomeIcon icon={faBars} />
    const minusIcon = <FontAwesomeIcon icon={faMinus} />
    const [isMenu, setIsMenu] = useState(false)

    const {user,logOut,setErr} = useAuth()

    const handleMenu = () => {
        setIsMenu(!isMenu)
    }
    
    const hideMenu = () => {
        setIsMenu(false)
    }

    return (
            <div className="min-w-full fixed bg-gray-200 bg-opacity-75 z-10">
                <nav className="max-h-28">
                    <div className="container mx-auto flex justify-between">
                        <div className="flex flex-1 items-center">
                            <img className="h-28" src={cliniclogo} alt="" />
                        </div>
                        <div className="hidden lg:flex font-bold text-white lg:items-center lg:mr-10 lg:justify-around lg:w-4/12">
                            <div className="dropdown dropdown-hover cursor-pointer">
                                <div tabIndex="0" className="m-1">
                                    <NavHashLink smooth className="rounded-full border-t-2 px-5 py-3 shadow-lg shadow-stone-400 bg-stone-500 hover:bg-white hover:text-stone-500 ease-in-out duration-700" activeStyle={{borderBlockColor:'white'}} to="/home#top">Home</NavHashLink>
                                </div> 
                                <ul tabIndex="0" className="p-2 shadow menu dropdown-content rounded-lg text-gray-500 bg-white w-48">
                                    <HashLink smooth className="text-center border-b" to="/home#top">Home-Top</HashLink>
                                    <HashLink smooth className="text-center border-b" to="/home#urgent-care">Urgent-Care</HashLink>
                                    <HashLink smooth className="text-center border-b" to="/home#supportive">Supportive Healthcare</HashLink>
                                    <HashLink smooth className="text-center border-b" to="/home#services">Services</HashLink>
                                    <HashLink smooth className="text-center border-b" to="/home#doctors">Doctors</HashLink>
                                    <HashLink smooth className="text-center border-b" to="/home#online-meet">Virtual-Meet</HashLink>
                                    <HashLink smooth className="text-center border-b" to="/home#insurance">Insurance</HashLink>
                                    <HashLink smooth className="text-center " to="/home#appoinment">Appointment</HashLink>
                                </ul>
                            </div>
                            
                            <NavHashLink smooth to="/departments#all-services" activeStyle={{borderBlockColor:'white'}} className="rounded-full border-b-2 mx-2 px-5 py-2 bg-stone-500 shadow-lg shadow-stone-400 hover:bg-white hover:text-stone-500 ease-in-out duration-700 hover:border-stone-500">Services</NavHashLink>

                            <NavHashLink smooth to="/doctors#all-doctors" activeStyle={{borderBlockColor:'white'}} className="rounded-full border-b-2 px-5 py-2 bg-stone-500 shadow-lg shadow-stone-400 hover:bg-white hover:text-stone-500 ease-in-out duration-700 hover:border-stone-500">Doctors</NavHashLink>

                            <NavHashLink smooth to="/contact#contact" activeStyle={{borderBlockColor:'white'}} className="rounded-full border-b-2 mx-2 px-5 py-2 bg-stone-500 shadow-lg shadow-stone-400 hover:bg-white hover:text-stone-500 ease-in-out duration-700 hover:border-stone-500">Contact</NavHashLink>

                            
                            {
                                !user.email ?
                                <div>
                                    <NavHashLink onClick={()=>setErr('')} to="/login#login" className="rounded-full px-5 py-2 shadow-lg shadow-stone-400 text-stone-500 border-b-2 border-stone-500 hover:bg-stone-500 hover:text-white hover:border-white ease-in-out duration-700 ml-2">Login</NavHashLink>

                                    <NavHashLink onClick={()=>setErr('')} to="/join#join" className="rounded-full px-5 py-2 shadow-lg shadow-stone-400 text-stone-500 border-b-2 border-stone-500 hover:bg-stone-500 hover:text-white hover:border-white ease-in-out duration-700 ml-2">Join</NavHashLink>
                                </div>
                                : <button onClick={logOut} className="rounded-full font-bold px-5 py-2 shadow-lg shadow-stone-400 text-stone-500 border-b-2 border-stone-500 hover:bg-stone-500 hover:text-white hover:border-white ease-in-out duration-700 ml-2">SignOut</button>
                            }

                        </div>

                        <div className="lg:hidden flex items-center mr-2">
                            <button className="ease-in-out duration-500 text-xl text-orange-800 rounded-full border-b-2 border-r px-5 py-2 " onClick={handleMenu}>{ isMenu ? minusIcon : menuIcon } M</button>
                        </div>
                    </div>
                    {
                        <div className={`ease-in-out duration-500 z-10 w-screen bg-gray-100 ${isMenu ? "-translate-x-0":"-translate-x-full"}`}>
                            <SideMenu hideMenu ={hideMenu}></SideMenu>
                        </div>
                    }
                </nav>
            </div>
    );
};

export default Header;