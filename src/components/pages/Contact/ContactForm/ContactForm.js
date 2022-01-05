import React from 'react';

const ContactForm = () => {
    return (
        <div className="lg:container lg:mx-auto font-serif lg:my-20 my-10 lg:py-20 py-10">
            <div className="lg:px-20 lg:gap-24 lg:flex lg:items-center">
                <div className="overflow-hidden rounded-lg">
                    <img className="mx-auto lg:mx-0" src="https://i.ibb.co/SJQ8jYt/contact-form-img.jpg" alt="" />
                </div>
                <div className="lg:max-w-2xl my-10 lg:my-0 text-center lg:text-left lg:mx-0 mx-5">
                    <p className="text-xl text-red-400 font-bold ">DIGITAL HEALTH</p>
                    <h3 className="text-5xl text-stone-500 font-bold my-5">We’re Here to Help</h3>
                    <p className="text-lg text-stone-600 text-justify">Get a diagnosis and treatment plan without leaving the comfort of home. By downloading the NYP Connect app, you can access world-class care from the teams at Columbia and Weill Cornell Medicine.</p>
                    <div className="md:grid md:grid-cols-2 md:gap-6 mt-14 mb-4">
                        <input className="border-2 w-full mb-4 lg:mb-0 rounded-md py-4 px-3 text-red-400 font-bold focus:border-red-200 focus:outline-none" type="text" name="" id="" placeholder="Your Name"/>
                        <input className="border-2 w-full rounded-md py-4 px-3 text-red-400 font-bold focus:border-red-200 focus:outline-none" type="text" name="" id="" placeholder="Your Email"/>
                    </div>
                    <textarea className="w-full border-2 rounded-md py-4 px-3 text-red-400 font-bold focus:border-red-200 focus:outline-none" placeholder="Your Message" rows='7'></textarea>
                    <button className="border-2 px-4 py-3 mt-4 rounded-full bg-red-400 text-white font-bold text-lg hover:border-red-700 hover:text-red-700 hover:bg-white ease-in-out duration-700 shadow-lg shadow-red-200">SEND MESSAGE</button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;