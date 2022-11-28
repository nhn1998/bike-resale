import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Catagory from './Catagory/Catagory';

const Catagories = () => {
    // const [catagories,setCatagories]=useState('')

    const {data:catagories,isLoading}=useQuery({
        queryKey:['catagories'],
        queryFn:()=>fetch('https://assaingment-twelve-server-nhn1998.vercel.app/catagories')
        .then(res=>res.json())
    })
    if(isLoading){
        return <button className="btn loading">loading</button>
    }

    // useEffect(()=>{
    //     fetch('https://assaingment-twelve-server-nhn1998.vercel.app/catagories')
    //     .then(res=>res.json())
    //     .then(data=>setCatagories(data))
    // },[])
    return (
        <div className='my-32'>
            <div className="h2 text-4xl text-indigo-500 text-center">Select Your Catagories</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    catagories && catagories.map(catagory=><Catagory key={catagory._id} catagory={catagory}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;