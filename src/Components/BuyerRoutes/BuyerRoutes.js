import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Auth/AuthProvider';
import useBuyers from '../Hooks/UseBuyers/UseBuyers';
// import { authContext } from '../AuthProvider/AuthProvider';

const AdminRoute = ({children}) => {
    const {user,loading}=useContext(authContext)
    const [isBuyers,isBuyersLoading]=useBuyers(user?.email)
    const location = useLocation()
    if(loading || isBuyersLoading){
        return <button className="btn btn-square loading"></button>
    }
    if(user && isBuyers){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default AdminRoute;