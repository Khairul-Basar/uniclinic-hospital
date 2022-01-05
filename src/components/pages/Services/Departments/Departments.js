import React from 'react';
import useService from '../../../hooks/useService';
import Department from './Department';

const Departments = () => {
    const [services] = useService()
    return (
        <div className="lg:container lg:mx-auto mx-5 font-serif">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols gap-4 lg:px-20">
                {
                    services.length > 0 && services.map(service => <Department key={service.id} service={service}></Department>)
                }
            </div>
        </div>
        
    );
};

export default Departments;