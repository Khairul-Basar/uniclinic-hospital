import React from 'react';
import AllDoctors from './AllDoctors/AllDoctors';
import DoctorHead from './DoctorHead/DoctorHead';

const Doctors = () => {
    return (
        <div id="all-doctors" className="pt-28">
            <DoctorHead></DoctorHead>
            <AllDoctors></AllDoctors>
        </div>
    );
};

export default Doctors;