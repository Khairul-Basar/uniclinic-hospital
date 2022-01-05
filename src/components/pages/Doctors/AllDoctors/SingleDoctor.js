import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const SingleDoctor = (props) => {
    const {id,img,name} = props.doctor
    return (
        <div className="border rounded-lg overflow-hidden max-w-sm">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="text-center my-5">
                <h3 className="text-2xl font-bold text-rose-400"> {name} </h3>
                <div className="my-7">
                    <HashLink smooth to={`/doctors/${id}#doctor-details`} className="mt-3 py-3 px-4 rounded-full font-bold bg-stone-500 text-white shadow-lg shadow-stone-300 hover:text-stone-500 hover:bg-white ease-in-out duration-700"> 
                        SEE MORE 
                    </HashLink>
                </div>
            </div>
        </div>
    );
};

export default SingleDoctor;