import React from 'react';

const HeadSection = () => {
    return (
        <div className="lg:container lg:mx-auto font-serif lg:my-20 mb-20">
            <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
                <div>
                    <img src="https://i.ibb.co/k37qrWJ/departments-banner.jpg" alt="" />
                </div>
                <div className="my-10 lg:my-0 lg:max-w-xl text-center lg:text-left lg:text-justify mx-5 lg:mx-0">
                    <p className="text-lg text-rose-400">OUR SERVICES</p>
                    <h3 className="font-bold text-5xl text-stone-500 mt-4 mb-8">Departments</h3>
                    <p className="text-lg text-stone-500">Our clinic accepts most major health insurance plans and providers to ensure you get quality care at a cost that fits within your budget. Our clinic accepts most major health insurance plans to ensure you get quality care at a cost that fits within your budget.</p>
                </div>
            </div>
        </div>
    );
};

export default HeadSection;