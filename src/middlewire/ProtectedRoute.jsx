import React, { use } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../components/Loading';

const ProtectedRoute = () => {
    const {user,userLoading}=use(AuthContext);
    const location =useLocation();
    if(userLoading){
        return <Loading></Loading>
    }
    if(!user){
       return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    return <Outlet />;
    
};

export default ProtectedRoute;