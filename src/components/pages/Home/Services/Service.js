import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Service = (props) => {
    const {id,name} = props.service
    const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div className="text-center w-48 mt-5 mx-auto">
            <HashLink smooth to={`/departments/${id}#service-details`} className="border-b-2 shadow-lg text-center pt-5 pb-3 px-5 rounded-full text-rose-400 cursor-pointer hover:border-red-300 ease-in-out duration-500">{name} {arrowIcon}</HashLink>
        </div>
    );
};

export default Service;