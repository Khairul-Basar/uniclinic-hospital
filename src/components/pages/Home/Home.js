import React from 'react';
import Appoinment from './Appoinment/Appoinment';
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
import Insurance from './Insurance/Insurance';
import Services from './Services/Services';
import Supportive from './Supportive/Supportive';
import UrgentCare from './UrgentCare/UrgentCare';
import VirtualMeet from './VirtualMeet/VirtualMeet';

const Home = () => {
    return (
        <div id="top" className="z-0 pt-28">
            <Banner></Banner>
            <UrgentCare></UrgentCare>
            <Supportive></Supportive>
            <Services></Services>
            <Doctors></Doctors>
            <VirtualMeet></VirtualMeet>
            <Insurance></Insurance>
            <Appoinment></Appoinment>
        </div>
    );
};

export default Home;