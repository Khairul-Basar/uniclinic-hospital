import React from 'react';
import supportiveImg from '../../../../images/supportive/supportive.jpg'

const Supportive = () => {
    return (
        <div id="supportive" className="min-w-full bg-slate-100 py-28">
            <div className="lg:flex lg:justify-center lg:items-center">
                <div className="lg:mr-10 flex justify-center">
                    <img src={supportiveImg} alt="Supportive-img" />
                </div>
                <div className="lg:ml-10 font-serif lg:text-left text-center mt-10 lg:mt-0">
                    <p className="text-lg text-rose-500">WHY UNICLINIC</p>
                    <h3 className="text-5xl font-bold lg:my-10 mb-10 mx-5"><span className="text-red-400">Simple</span> <span className="text-sky-400">supportive</span> <br /> <span className="text-orange-400">healthcare</span></h3>
                    
                        
                    <div className="collapse w-96 rounded-lg border bg-white collapse-plus mx-auto lg:mx-0">
                        <input type="checkbox"/> 
                        <div className="collapse-title text-xl font-medium text-rose-500">
                            22 Years' Experience
                        </div> 
                        <div className="collapse-content"> 
                            <p className="bg-white text-rose-500 p-2 rounded-lg">A small <span className="text-sky-500">river</span> named <span className="text-orange-500 font-bold">Duden</span> flows by their place and supplies it with the necessary regelialia.
                            </p>
                        </div>
                    </div>
                    <div className="collapse w-96 rounded-lg border bg-white collapse-plus my-3 mx-auto lg:mx-0">
                        <input type="checkbox"/> 
                        <div className="collapse-title text-xl font-medium text-rose-500">
                            Medical Excellence
                        </div> 
                        <div className="collapse-content"> 
                            <p className="bg-white text-rose-500 p-2 rounded-lg">It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                            </p>
                        </div>
                    </div> 
                    <div className="collapse w-96 rounded-lg border bg-white collapse-plus mx-auto lg:mx-0">
                        <input type="checkbox"/> 
                        <div className="collapse-title text-xl font-medium text-rose-500">
                            In-person or online care
                        </div> 
                        <div className="collapse-content"> 
                            <p className="bg-white text-rose-500 p-2 rounded-lg">
                                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
                            </p>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Supportive;