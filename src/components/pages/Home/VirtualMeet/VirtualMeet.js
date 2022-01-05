import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons'

const VirtualMeet = () => {

    const clockIcon = <FontAwesomeIcon icon={faUserClock} />
    const expertIcon = <FontAwesomeIcon icon={faPlusSquare} />
    const insuranceIcon = <FontAwesomeIcon icon={faHandHoldingUsd} />
    const prescriptionIcon = <FontAwesomeIcon icon={faFileMedicalAlt} />


    return (
        <div id="online-meet" className="pt-28 min-w-full">
            <div className="lg:flex lg:flex-row-reverse lg:items-center  bg-gray-100">
                <div>
                    <img src="https://i.ibb.co/TP5rBgw/virtual-meet.jpg" alt="" />
                </div>
                <div className="font-serif lg:max-w-xl lg:mr-36 p-5 lg:p-0">
                    <div className="lg:my-16 mb-10 text-center lg:text-justify">
                        <p className="text-lg text-red-400 font-bold">DIGITAL HEALTH</p>
                        <h3 className="text-5xl mt-3 mb-7 text-gray-500 font-bold"><span className="text-blue-400">Virtual</span> <span className="text-rose-400">Urgent</span> <span className="text-orange-400">Care</span></h3>
                        <p className="text-lg">
                            <span className="text-pink-500">Get a diagnosis and treatment plan without leaving</span> <span className="text-red-500">the comfort of home.</span> <span className="text-blue-500">By downloading the NYP Connect app,</span> <span className="text-orange-500">you can access world-class care from the teams</span> <span className="text-sky-600">at Columbia and Weill Cornell Medicine.</span>
                            </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 grid-cols">
                        <div className="flex items-center">
                            <div className="text-5xl border py-4 px-3 mr-5 bg-rose-500 text-white rounded-full">{clockIcon}</div>
                            <div>
                                <p className="font-bold text-red-500">Convenient Hours</p>
                                <p className="text-sky-600">Adults: 8am-midnight, <br />Children: 8am-midnight</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="text-5xl border py-4 px-3 mr-5 bg-sky-500 text-white rounded-full">{insuranceIcon}</div>
                            <div>
                                <p className="text-sky-500 font-bold">Insurances Accepted</p>
                                <p className="text-orange-600">Your visit may only be the price of a copay</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="text-5xl border py-4 px-5 mr-5 bg-pink-500 text-white rounded-full">{expertIcon}</div>
                            <div>
                                <p className="font-bold text-pink-500">Expert Care</p>
                                <p className="text-rose-600">Board-certified Emergency and Pediatric Medicine Physicians</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="text-5xl border py-4 px-5 mr-5 bg-orange-500 text-white rounded-full">{prescriptionIcon}</div>
                            <div>
                                <p className="font-bold text-orange-500">Prescriptions</p>
                                <p className="text-pink-600">Sent right to your nearest pharmacy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualMeet;