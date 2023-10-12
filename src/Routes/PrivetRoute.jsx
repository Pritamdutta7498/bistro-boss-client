import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(user){
        return children;
    }
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
   return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;