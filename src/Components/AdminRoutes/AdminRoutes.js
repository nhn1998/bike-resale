import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Auth/AuthProvider';
import useAdmin from '../Hooks/UseAdmin';
// import { authContext } from '../AuthProvider/AuthProvider';

const AdminRoute = ({children}) => {
    const {user,loading}=useContext(authContext)
    const [isAdmin,isAdminLoading]=useAdmin(user?.email)
    const location = useLocation()
    if(loading || isAdminLoading){
        return <button className="btn btn-square loading"></button>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default AdminRoute;