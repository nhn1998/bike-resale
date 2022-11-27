import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <div className="h2 text-3xl">This is Not Route.Please Go to the <Link className='text-blue-600' to='/'>HomePage</Link></div>
        </div>
    );
};

export default NotFoundPage;