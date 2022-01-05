import React from 'react';
import useDoctor from '../../../hooks/useDoctor';
import SingleDoctor from './SingleDoctor';

const AllDoctors = () => {
    const {doctor} = useDoctor()
    return (
        <div className="lg:container lg:mx-auto mx-5 font-serif">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols gap-4 lg:px-36">
                {
                    doctor.length > 0 && doctor.map(doc => <SingleDoctor key={doc.id} doctor={doc}></SingleDoctor>)
                }
            </div>
        </div>
    );
};

export default AllDoctors;