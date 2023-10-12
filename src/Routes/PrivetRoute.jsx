import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    if(user){
        return children;
    }
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    // navigate routes to pathname
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;