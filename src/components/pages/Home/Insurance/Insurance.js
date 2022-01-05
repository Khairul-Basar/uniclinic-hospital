import React from 'react';

const Insurance = () => {
    return (
        <div id="insurance" className="pt-28 font-serif">
            <div className="text-center px-5">
                <h3 className="text-4xl font-bold text-stone-500">We accept all major insurance plans</h3>
                <p className="text-lg mt-5 text-gray-500">Please call us at <span className="font-bold text-orange-500">415-523-6317</span> and we’ll help you out.</p>
            </div>
            <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 lg:w-8/12 mx-auto my-16">
                <div className="mx-auto"><img src="https://i.ibb.co/1LLWKdz/insurance-1.png" alt="" /></div>
                <div className="mx-auto"><img src="https://i.ibb.co/qrjX6Bm/insurance-3.png" alt="" /></div>
                <div className="mx-auto"><img src="https://i.ibb.co/FYCfYbq/insurance-4.png" alt="" /></div>
                <div className="mx-auto"><img src="https://i.ibb.co/cDkJndH/insurance-5.png" alt="" /></div>
                <div className="mx-auto"><img src="https://i.ibb.co/cJLw0b8/insurance-6.png" alt="" /></div>
                <div className="mx-auto"><img src="https://i.ibb.co/Kx6fCmC/insurance-12.png" alt="" /></div>
            </div>
        </div>
    );
};

export default Insurance;