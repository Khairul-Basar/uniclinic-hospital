import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useDoctor from '../../../hooks/useDoctor';
import Doctor from './Doctor';

const Doctors = () => {

    const {doctor} = useDoctor()
    

    return (
        <div id="doctors" className="font-serif py-28">
            <div className="text-center">
                <p className="text-lg text-rose-400">MEET OUR DOCTORS</p>
                <h3 className="text-4xl mb-10 mt-3 font-bold mx-5"><span className="text-red-400">Dedicated</span> <span className="text-orange-400">&</span> <span className="text-sky-400">Experienced</span> <span className="text-pink-400">Team</span></h3>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols gap-4 w-9/12 mx-auto">
                {
                    doctor.length > 0 && doctor.slice(0,4).map(doc=> <Doctor key={doc.id} doctor={doc}></Doctor>)
                }
            </div>
            <div className="my-10 text-center">
            <HashLink smooth to="/doctors#all-doctors" className="text-red-400 font-bold text-lg border-b-2 hover:border-r hover:border-l ease-in-out duration-300 shadow-md hover:shadow-red-100 border-t-0 rounded-full px-5 py-2">SEE ALL</HashLink>
            </div>
        </div>
    );
};

export default Doctors;