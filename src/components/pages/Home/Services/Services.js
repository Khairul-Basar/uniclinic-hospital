import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Service from './Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    const [services, setServices] = useState([])
    const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div id="services" className="min-w-full font-serif pt-28">
            <div className="text-center my-12 mx-10">
                <p className="text-lg text-rose-500 font-semibold">OUR SERVICES</p>
                <h3 className="text-4xl font-bold text-stone-500 mt-5">We can <span className="text-rose-400">help</span> you with <span className="text-orange-400">the</span> following <br /> <span className="text-sky-400">conditions</span><span className="text-pink-500">:</span></h3>
            </div>
            <div className="container mx-auto mb-12 lg:px-96 font-semibold">
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-4 px-3 lg:px-0">
                {
                    services.map(service=> <Service key={service.id} service={service}></Service>)
                }
                </div>
            </div>
            <div className="my-10 text-center">
                <HashLink smooth to="/departments#all-services" className="text-red-400 font-bold text-lg border-b-2 hover:border-r hover:border-l ease-in-out duration-300 shadow-md hover:shadow-red-100 border-t-0 rounded-full px-5 py-2">SEE ALL</HashLink>
            </div>
        </div>
    );
};

export default Services;