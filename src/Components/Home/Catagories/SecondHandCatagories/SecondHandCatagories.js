import React, { useContext } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { authContext } from '../../../Auth/AuthProvider';

const SecondHandCatagories = ({ catagory }) => {
    const { name, img, use, resellPrice, originalPrice, location } = catagory
    const { user } = useContext(authContext)
    console.log(user)
    return (
        <div className="card my-10 w-96 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex gap-2'>
                    <img className='rounded-full w-10' src={user.photoURL} alt="" />
                    {user.displayName}
                </div>
                <h2 className="card-title">{name}</h2>
                <p className='flex font-bold'> <FaLocationArrow></FaLocationArrow>Loaction: {location}</p>
                <p>Asking Price: {resellPrice}</p>
                <p>Market Price: {originalPrice}</p>
                <p>Used: {use} Years</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default SecondHandCatagories;