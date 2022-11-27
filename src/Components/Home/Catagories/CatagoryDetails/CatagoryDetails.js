import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CatagoryDetails = () => {
    const catagories = useLoaderData();
    console.log(catagories)
    return (
        <div>
            {
                // catagories.map(catagorie=><p>{catagorie.name}</p>)
            }
        </div>
    );
};

export default CatagoryDetails;