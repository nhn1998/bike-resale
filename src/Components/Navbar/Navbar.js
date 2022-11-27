import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { authContext } from '../AuthProvider/AuthProvider';
// import logo from '../Header/logo.png'
import { FaSignOutAlt } from "react-icons/fa";
import { authContext } from '../Auth/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(authContext)

    const HandleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }
    return (
        <div className="navbar bg-orange-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user?.email ?
                            <><li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='/about' className="justify-between">
                                    About us
                                </Link>
                            </li>
                            <li><Link to='blog'>Blogs</Link></li></>:
                            <><li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='/about' className="justify-between">
                                    About us
                                </Link>
                            </li>
                            <li><Link to='blog'>Blogs</Link></li></>
                        }
                        
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img alt="" />
                    </div>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl italic">Bike Resell</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                {
                            user?.email ?
                            <><li><Link to='/'>Home</Link></li>

                            <li tabIndex={0}>
                                <Link to='/about' className="justify-between">
                                    About us
                                </Link>
                            </li>
                            <li><Link to='blog'>Blogs</Link></li></>:
                            <><li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='/about' className="justify-between">
                                    About us
                                </Link>
                            </li>
                            <li><Link to='blog'>Blogs</Link></li></>
                        }
                </ul>
            </div>
            <div className="navbar-end mr-10">
                <div className='mr-4'>
                    <img className="w-20 rounded-full mr-4" src={user?.photoURL} alt="" />
                    <p className='font-bold'>{user?.displayName}</p>
                </div>
                {
                    user?.email ?
                        <button onClick={HandleLogOut}><FaSignOutAlt size={30}></FaSignOutAlt></button> :
                        <>
                            <Link to='/login' className="btn mr-3">Login</Link>
                            <Link to='/signup'><button className="btn btn-accent">Register</button></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;