import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useDetails from '../../hooks/useDetails';
import useService from '../../hooks/useService';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [services] = useService()
    const {info} = useDetails(services,serviceId)
    // console.log(info)
    return (
        <div id="service-details" className="pt-28 font-serif">
            <div className="lg:container lg:mx-auto mx-5 lg:px-10 lg:mt-20 py-10 overflow-hidden">
                <div className="lg:flex lg:flex-row-reverse">
                    
                    <div>
                        <div className="lg:max-w-4xl bg-rose-100 bg-opacity-50 rounded-xl px-5 lg:ml-24 mt-5 lg:px-20 py-10 text-center lg:text-left">
                            <h3 className="text-4xl font-bold text-stone-500">{info?.name}</h3>
                            <img className="mt-10 rounded-lg" src={info?.img} alt="" />
                            <p className="mt-7 text-lg text-justify text-stone-600">{info?.desc}</p>
                        </div>
                        
                        <div className="lg:max-w-4xl bg-rose-100 bg-opacity-50 rounded-xl px-5 lg:ml-24 mt-5 lg:px-20 py-10 text-center lg:text-left">
                            <h3 className="text-4xl font-bold text-stone-500">Working Shifts</h3>
                            <div className="lg:grid grid-cols-2 gap-4 mt-5">
                                {
                                    info?.servicelist?.map(service=> <div key={service} className="text-center px-5 py-5 bg-rose-100 font-bold text-stone-500 rounded-lg mt-5 lg:mt-0">
                                        <h3>{service}</h3>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-sm overflow-hidden rounded-xl h-3/4 border bg-stone-500 py-5 my-10 lg:my-0">
                        <div className="px-10 text-white text-center lg:text-left">
                            <h3 className="text-3xl font-bold text-white">Opening Hours</h3>
                            <p className="text-lg py-3">I enjoy getting to know my patients and building meaningful relationships</p>
                            <div className="text-xl py-3 flex justify-between border-b">
                                <h3>Monday</h3>
                                <h3>8:00-20:00</h3>
                            </div>
                            <div className="text-xl flex justify-between border-b py-3">
                                <h3>Monday</h3>
                                <h3>8:00-20:00</h3>
                            </div>
                            <div className="text-xl flex justify-between border-b py-3">
                                <h3>Monday</h3>
                                <h3>8:00-20:00</h3>
                            </div>
                            <div className="text-xl flex justify-between border-b py-3">
                                <h3>Monday</h3>
                                <h3>8:00-20:00</h3>
                            </div>
                            <div className="text-xl flex justify-between border-b py-3">
                                <h3>Monday</h3>
                                <h3>8:00-20:00</h3>
                            </div>
                            <div className="text-xl flex justify-between border-b py-3">
                                <h3>Monday</h3>
                                <h3>8:00-20:00</h3>
                            </div>
                            <div className="text-xl flex justify-between py-3">
                                <h3>Monday</h3>
                                <h3>8:00-20:00</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;