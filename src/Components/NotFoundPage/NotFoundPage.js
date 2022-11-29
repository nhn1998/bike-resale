import React from 'react';
import { Link } from 'react-router-dom';
import img from './404.jpg'
const NotFoundPage = () => {
    return (
        <div>
            <div className="h2 text-3xl text-center">This is Not Route.Please Go to the <Link className='text-blue-600' to='/'>HomePage</Link></div>
            <div>
                <img className='' src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;