import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Auth/AuthProvider';

import useSellers from '../Hooks/UseSellers/UseSellers';
// import { authContext } from '../AuthProvider/AuthProvider';

const SellersRoute = ({children}) => {
    const {user,loading}=useContext(authContext)
    const [isSellers,isSellersLoading]=useSellers(user?.email)
    const location = useLocation()
    if(loading || isSellersLoading){
        return <button className="btn btn-square loading"></button>
    }
    if(user && isSellers){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default SellersRoute;