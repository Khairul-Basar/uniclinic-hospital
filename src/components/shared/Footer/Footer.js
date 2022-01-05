import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import clinicLogo from '../../../images/Logo/uniclinic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />

    return (
        <div className='z-0 font-serif'>
            <div className="lg:flex lg:justify-center lg:gap-24 gap-6 my-14 lg:my-24">
                <div className="lg:max-w-lg px-5 lg:my-0 my-10 lg:text-left text-center">
                    <img className="border h-20 mx-auto lg:mx-0" src={clinicLogo} alt="" />
                    <h3 className="text-xl my-5 text-orange-600"><span className="text-stone-500">Address</span>: <span className="text-red-400">Kalabagan</span>, <span className="text-pink-500">Road-3</span>, <span className="text-sky-500">Dhaka</span></h3>
                    <p className="text-xl text-pink-400"><span className="text-stone-500">Open</span>: <span className="text-sky-500">Mon - Sat</span>, <span className="text-orange-500 ml-2">9:00AM</span> - <span className="text-red-400">6:00PM</span></p>
                </div>
                <div className="lg:max-w-lg text-center px-5 my-10 lg:my-0">
                    <h3 className="text-2xl font-bold text-stone-500">LINKS</h3>
                    <p className="text-lg my-3"> <HashLink smooth to="/home#services"> <span className="text-sky-500">HOME</span> <span className="mx-2 text-red-400">{arrowIcon}</span> <span className="text-orange-500">SERVICES</span> </HashLink> </p>

                    <p className="text-lg"> <HashLink smooth to="/home#doctors"> <span className="text-sky-500">HOME</span> <span className="mx-2 text-red-400">{arrowIcon}</span> <span className="text-orange-500">DOCTORS</span> </HashLink> </p>

                    <p className="text-lg my-2 text-sky-600"> <HashLink smooth to="/departments#all-services"> <span className="text-orange-500">ALL</span> DEPARTMENTS </HashLink> </p>

                    <p className="text-lg text-orange-600"> <HashLink smooth to="/doctors#all-doctors"> <span className="text-blue-500">ALL</span> DOCTORS </HashLink> </p>
                </div>
                <div className="lg:max-w-lg text-center px-5">
                    <h3 className="text-2xl font-bold text-stone-500">CONTACT</h3>
                    <p className="text-lg my-3 text-orange-500"><span className="text-sky-500">Phone</span>: <span className="text-pink-600">019*********</span></p>
                    <p className="text-lg my-3 text-orange-500"> <span className="text-sky-500">Email</span>: <span className="text-pink-600">khairulbasar130@gmail.com</span> </p>
                    <p className="text-lg text-red-500"> <HashLink smooth to="/contact#contact">CONTACT <span className="text-orange-600">{arrowIcon}</span></HashLink> </p>
                </div>
            </div>
            <div className="text-center bg-stone-500">
                <p className="text-lg text-white font-bold px-5 py-5">This is a sample website - Developed By <br className="lg:hidden" />Khairul-Basar © 2022</p>
            </div>
        </div>
    );
};

export default Footer;