import React from 'react';
import Departments from './Departments/Departments';
import HeadSection from './HeadSection/HeadSection';

const Services = () => {
    return (
        <div id="all-services" className="pt-28">
            <HeadSection></HeadSection>
            <Departments></Departments>
        </div>
    );
};

export default Services;