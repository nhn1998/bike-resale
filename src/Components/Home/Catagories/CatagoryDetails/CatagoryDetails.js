import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SecondHandCatagories from '../SecondHandCatagories/SecondHandCatagories';

const CatagoryDetails = () => {
    const catagories = useLoaderData();
    console.log(catagories)
    return (
        <div>
            <div className="h2 text-2xl mt-10 text-blue-500 text-center">Second Hand bikes</div>
            <div className='mt-10 grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    catagories && catagories.map(catagory=><SecondHandCatagories key={catagory._id} catagory={catagory}></SecondHandCatagories>)
                }
            </div>
        </div>
    );
};

export default CatagoryDetails;