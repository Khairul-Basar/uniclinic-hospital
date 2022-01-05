import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ContactInfo = () => {
    const clinicIcon = <FontAwesomeIcon icon={faClinicMedical} />
    const clockIcon = <FontAwesomeIcon icon={faHistory} />
    const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />
    return (
        <div className="container mx-auto font-serif my-16 py-16">
            <div className="flex justify-center flex-wrap gap-4 lg:px-20 mx-5 lg:mx-0">
                <div className="bg-red-100 bg-opacity-75 px-5 text-center lg:text-left lg:max-w-sm max-w-xs lg:flex gap-4 py-7 rounded-lg lg:pl-5 lg:pr-5">
                    <div className="text-4xl text-stone-500 mb-3 lg:mb-0">
                        {clinicIcon}
                    </div>
                    <div className="text-stone-500">
                        <h4 className="text-2xl mb-3 text-rose-400 font-bold">Visit Us</h4>
                        <p className="text-lg">Kalabagan, road-3, Dhaka, Bangladesh</p>
                        <p className="text-lg">Monday – Sunday, 9am – 7pm EST</p>
                    </div>
                </div>
                <div className="bg-stone-100 lg:max-w-sm max-w-xs px-14 text-center lg:text-left lg:flex gap-4 py-7 rounded-lg lg:px-14">
                    <div className="text-4xl text-stone-500 mb-3 lg:mb-0">
                        {clockIcon}
                    </div>
                    <div className="text-stone-500">
                        <h4 className="text-2xl mb-3 text-rose-400 font-bold">Call Us 24/7</h4>
                        <p className="text-lg">1-800-123-1234</p>
                        <p className="text-lg">01624****** (What's App)</p>
                    </div>
                </div>
                <div className="bg-pink-100 bg-opacity-75 lg:max-w-sm max-w-xs px-14 text-center lg:text-left lg:flex gap-4 py-7 rounded-lg lg:px-14">
                    <div className="text-4xl text-stone-500 mb-3 lg:mb-0">
                        {checkIcon}
                    </div>
                    <div className="text-stone-500">
                        <h4 className="text-2xl mb-3 text-rose-400 font-bold">Get in Touch</h4>
                        <p className="text-lg">hospital@uniclinic.com</p>
                        <p className="text-lg">uniclinic4738@hospital.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;