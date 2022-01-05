import React from 'react';
import banner from '../../../../images/banner/banner.jpg'
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <div className="min-w-full border-b font-serif pb-20 lg:pb-0">
            <div className="lg:flex lg:flex-row-reverse">
                <div>
                    <img src={banner} alt="" />
                </div>
                <div className="flex justify-center text-center lg:w-6/12 items-center ">
                    <div>
                        <h3 className="lg:text-5xl text-2xl text-gray-500 my-5 lg:my-10 font-bold">
                            Convenient, Quality <br /> <span className="text-red-400">Walk-in Clinic</span> in the <br /> Heart of Boston
                            
                        </h3>
                        <h3 className="lg:border-b-2"></h3>
                        <p className="lg:my-7 my-4 text-lg text-gray-500">Open 7 days a week, weekends & evening, most holidays.</p>
                        <HashLink smooth to="/home#services" className="hover:border-b-2 border-b-2 border-red-100 hover:border-r ease-in-out duration-500 delay-150 py-3 px-7 bg-red-400 text-white text-2xl rounded-full font-bold mb-7 hover:text-red-400 hover:bg-white lg:m-0">Services</HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;