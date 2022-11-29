import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authContext } from '../Auth/AuthProvider';
import Footer from '../Footer/Footer';
import useAdmin from '../Hooks/UseAdmin';
import useBuyers from '../Hooks/UseBuyers/UseBuyers';
import Navbar from '../Navbar/Navbar';
const Dashboard = () => {
    const {user}=useContext(authContext);
    const [isAdmin]=useAdmin(user?.email);
    const [isBuyers]=useBuyers(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {
                            isAdmin ?
                            <>
                        <li><Link to='/dashboard/allsellers'>All sellers</Link></li>
                        <li><Link to='/dashboard/allbuyers'>All buyers</Link></li>
                        <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                        </>:
                        <><li><Link to='/dashboard/addProducts'>Add a Products</Link></li>
                        <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                        <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        
                        </>
                        }
                        
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;