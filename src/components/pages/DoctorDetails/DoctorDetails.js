import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDetails from '../../hooks/useDetails';
import useDoctor from '../../hooks/useDoctor';

const DoctorDetails = () => {
    const {doctorId} = useParams()
    const {doctor} = useDoctor()
    const {info} = useDetails(doctor,doctorId)
    return (
        <div id="doctor-details" className="pt-28 font-serif">
            <div className="lg:container lg:mx-auto mx-5 lg:px-10 lg:mt-20 py-10 overflow-hidden">
                <div className="lg:flex">
                    <div className="lg:max-w-sm overflow-hidden rounded-xl">
                        <div>
                            <img className="w-full" src={info?.img} alt="" />
                            <div className="bg-stone-500 text-white px-14 py-10 rounded">
                                <h3 className="border-b text-4xl pb-5 mb-5">Personal Info</h3>
                                <p className="text-xl">Phone: {info?.phone}</p>
                                <p className="text-xl">Email: {info?.email}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="lg:max-w-4xl bg-rose-100 bg-opacity-50 rounded-xl px-5 lg:ml-24 mt-5 lg:px-20 py-10 text-center lg:text-left">
                            <h3 className="text-4xl font-bold text-stone-500">{info?.name}</h3>
                            <p className="text-xl font-bold text-rose-400 mt-2 border-b pb-7">{info?.speciality}</p>
                            <p className="mt-7 text-lg text-justify text-stone-600">{info?.desc}</p>
                        </div>
                        <div className="lg:max-w-4xl bg-rose-100 bg-opacity-50 rounded-xl px-5 lg:ml-24 mt-5 lg:px-20 py-10 text-center lg:text-left">
                            <h3 className="text-4xl font-bold text-stone-500">Education & Experience</h3>
                            <div className="rounded-xl mt-5 text-center lg:text-left">
                                <div className="lg:flex lg:max-w-2xl text-xl border-b py-5 text-stone-500">
                                    <h3 className="lg:text-left font-bold lg:mr-5">Education: </h3>
                                    <p className="lg:ml-2">{info?.education}</p>
                                </div>
                                <div className="lg:flex lg:max-w-2xl text-xl border-b py-5 text-stone-500">
                                    <h3 className="lg:text-left font-bold lg:mr-5">Board certification: </h3>
                                    <p className="lg:ml-2">{info?.certification}</p>
                                </div>
                                <div className="lg:flex lg:max-w-2xl text-xl border-b py-5 text-stone-500">
                                    <h3 className="lg:text-left font-bold lg:mr-5">Field of expertise: </h3>
                                    <p className="lg:ml-2">{info?.expertise}</p>
                                </div>
                                <div className="lg:flex lg:max-w-2xl text-xl py-5 text-stone-500">
                                    <h3 className="lg:text-left font-bold lg:mr-5">Years of practice: </h3>
                                    <p className="lg:ml-2">{info?.practice}</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:max-w-4xl bg-rose-100 bg-opacity-50 rounded-xl px-5 lg:ml-24 mt-5 lg:px-20 py-10 text-center lg:text-left">
                            <h3 className="text-4xl font-bold text-stone-500">Working Shifts</h3>
                            <div className="lg:grid grid-cols-3 gap-4 mt-5">
                                {
                                    info?.workingday?.map(day=> <div key={day} className="text-center px-5 py-5 bg-rose-100 font-bold text-stone-500 rounded-lg mt-5 lg:mt-0">
                                        <h3>{day}</h3>
                                        <p>{info?.workinghour}</p>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;