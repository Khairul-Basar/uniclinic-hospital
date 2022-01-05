import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXRay } from '@fortawesome/free-solid-svg-icons'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

const UrgentCare = () => {
    const xrayIcon = <FontAwesomeIcon icon={faXRay} />
    const heartIcon = <FontAwesomeIcon icon={faHeartbeat} />
    const insuranceIcon = <FontAwesomeIcon icon={faMoneyCheckAlt} />
    return (
        <div id="urgent-care" className="lg:my-20  py-28 font-serif">
            <div className="text-center mx-5">
                <h3 className="text-4xl font-bold text-stone-500">Urgent Care & Occupational <br /> Medicine Clinic</h3>
                <p className="text-lg font-semibold text-stone-500 my-5">If you have any questions about <span className="underline decoration-2 decoration-sky-500">testing</span>, <span className="underline decoration-2 decoration-red-500">insurance</span> <span className="underline decoration-2 decoration-yellow-500">coverage</span>, <span className="text-red-400">duration</span> of <span className="underline decoration-2 decoration-pink-500">services</span>.</p>
            </div>

            <div className="flex justify-center flex-wrap">
                <div className="lg:max-w-sm text-center bg-red-100 py-5 px-7 m-5 border rounded-lg text-stone-500">
                    <div className="text-5xl border-b-2 border-red-200 border-t-2 rounded-full w-28 mx-auto py-7 text-red-400">{xrayIcon}</div>
                    <h3 className="text-3xl font-bold my-5"><span className="text-red-400">X</span><span className="text-pink-300">-</span><span className="text-red-400">Ray</span> & Lab <br /> Services</h3>
                    <p className="text-lg">Lab and x-ray <br /> services available on-site for quick diagnostics.</p>
                </div>
                <div className="lg:max-w-sm text-center bg-red-100 py-5 px-7 m-5 border rounded-lg text-stone-500">
                    <div className="text-5xl border-b-2 border-red-200 border-t-2 rounded-full w-28 mx-auto py-7 text-red-400">{heartIcon}</div>
                    <h3 className="text-3xl font-bold my-5"><span className="text-red-400">Walk</span><span className="text-orange-400">-</span><span className="text-red-400">in</span> Urgent <br /> Care</h3>
                    <p className="text-lg">Lab and x-ray <br /> services available on-site for quick diagnostics.</p>
                </div>
                <div className="lg:max-w-sm text-center bg-red-100 py-5 px-7 m-5 border rounded-lg text-stone-500">
                    <div className="text-5xl border-b-2 border-red-200 border-t-2 rounded-full w-28 mx-auto py-7 text-red-400">{insuranceIcon}</div>
                    <h3 className="text-3xl font-bold my-5">Most <span className="text-orange-400">Insurances</span> Accepted</h3>
                    <p className="text-lg">Lab and x-ray <br /> services available on-site for quick diagnostics.</p>
                </div>
                
            </div>
        </div>
    );
};

export default UrgentCare;