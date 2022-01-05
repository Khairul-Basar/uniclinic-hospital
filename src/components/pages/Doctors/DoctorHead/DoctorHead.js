import React from 'react';

const DoctorHead = () => {
    return (
        <div className="lg:container lg:mx-auto font-serif lg:my-20 mb-20">
            <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
                <div>
                    <img src="https://i.ibb.co/ZGtFpGq/doctor-banner.jpg" alt="" />
                </div>
                <div className="my-10 lg:my-0 lg:max-w-xl text-center lg:text-left lg:text-justify mx-5 lg:mx-0">
                    <p className="text-lg text-rose-400">WHY CHOOSE US</p>
                    <h3 className="font-bold text-5xl text-stone-500 mt-4 mb-8">Meet Our Doctors</h3>
                    <p className="text-lg text-stone-500">The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word “and” and the Little Blind Text should turn around and return to its own, safe country.</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorHead;