import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Appoinment = () => {
    const calenderIcon = <FontAwesomeIcon icon={faCalendarAlt} />
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])

    return (
        <div id="appoinment" className="lg:grid lg:grid-cols-2 font-serif pt-28">
            <div className="bg-stone-500 opacity-75 text-white">
                <div className="lg:max-w-md mx-auto lg:text-left text-center p-5 lg:p-0 lg:my-44">
                    <p className="text-6xl">{calenderIcon}</p>
                    <h3 className="text-5xl font-bold my-7">Book your appointment online</h3>
                    <p className="text-2xl">Our simple to use, online appointment process makes it easy for you to book for any one of our services and doctors.</p>
                </div>
            </div>
            <div className="border">
                <div className="lg:max-w-xl lg:mx-auto lg:my-44 my-10 mx-5 ">
                    <h3 className="text-3xl text-center text-stone-500 mb-5 lg:mb-10 font-bold">Fill in the form to book a visit</h3>
                    <div className="grid lg:grid-cols-2 grid-cols gap-4 mb-5">
                        <input className="border py-4 px-5 focus:border-stone-500 focus:border-2 rounded-xl focus:outline-none" placeholder="Your Name" type="text" />
                        <input className="border py-4 px-5 focus:border-stone-500 focus:border-2 rounded-xl focus:outline-none" placeholder="Your Email" type="text" />
                        <input className="border py-4 px-5 focus:border-stone-500 focus:border-2 rounded-xl focus:outline-none" placeholder="Phone" type="text" />
                        <input className="border py-4 px-5 focus:border-stone-500 focus:border-2 rounded-xl focus:outline-none" type="date" />
                        <select defaultValue="choose an Doctor"  className="bg-white text-stone-500 font-bold border py-4 px-5 focus:border-stone-500 focus:border-2 rounded-xl focus:outline-none">
                            <option defaultValue="choose an Doctor" className="text-white bg-stone-500" disabled selected>Choose a Doctor</option>
                            {
                                doctors.map(doc => {
                                    return <option className="text-white bg-stone-500" key={doc.id} value={doc.name}>{doc.name}</option>
                                })
                            }
                        </select>
                        <select defaultValue="choose an Service"  className="bg-white text-stone-500 font-bold border py-4 px-5 focus:border-stone-500 focus:border-2 rounded-xl focus:outline-none">
                            <option defaultValue="choose an Service" disabled selected className="text-white bg-stone-500">Choose a Department</option> 
                            {
                                services.map(service => {
                                    return <option className="text-white bg-stone-500" key={service.id} value={service.name}>{service.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <h3 className="text-xl font-bold text-white bg-stone-500 text-center rounded-xl ease-in-out duration-500 py-4 border-2 hover:border-stone-500 hover:text-stone-500 hover:bg-white cursor-pointer">Make <span className="mx-2">a</span> Appoinment</h3>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;