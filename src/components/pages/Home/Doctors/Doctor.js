import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Doctor = (props) => {
    const {id,img,name,speciality} = props.doctor
    return (
        <div>
            <div className="max-w-xs border mx-auto rounded-xl overflow-hidden">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="text-center mt-10 mb-6">
                    <h3 className="text-lg text-rose-400 font-bold">{name}</h3>
                    <p className="text-lg mt-2 mb-4 text-stone-500">{speciality}</p>
                    <HashLink smooth className="text-red-400 font-bold text-lg border-b-2 hover:border-r hover:border-l ease-in-out duration-300 shadow-md hover:shadow-red-100 border-t-0 rounded-full px-5 py-2" to={`/doctors/${id}#doctor-details`}>See More</HashLink>
                </div>
            </div>
        </div>
    );
};

export default Doctor;