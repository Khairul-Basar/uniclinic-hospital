import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = useAuth()
    if(isLoading){
       return <div className="pt-28 text-center">
                <button type="button" className="bg-indigo-500 text-white rounded font-white mt-10 py-3 px-5" disabled>
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    
                    </svg>
                    Processing...
                </button>
            </div> 
    }
    return (
        <Route
            {...rest}
            render={({location})=> user.email ? (children):(<Redirect
                to={{
                    pathname:'/login',
                    state:{ from:location }
                }}
            ></Redirect>)}
        ></Route>
    );
};

export default PrivateRoute;