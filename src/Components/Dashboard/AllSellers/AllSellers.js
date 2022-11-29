// import { useQuery } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Auth/AuthProvider';

const AllSellers = () => {
    const {data:sellerRoles=[],isLoading}=useQuery({
        queryKey:['users'],
        queryFn:()=>fetch('https://assaingment-twelve-server-nhn1998.vercel.app/users?role=Sellers')
        .then(res=>res.json())
    })
    console.log(sellerRoles)
    // useEffect(()=>{
    //     fetch(`https://assaingment-twelve-server-nhn1998.vercel.app/users?role=Sellers`)
    //     .then(res=>res.json())
    //     .then(data=>setRoles(data[0]))
    // },[])
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        sellerRoles.map(roles=><tr>
            <td>{roles.name}</td>
            <td>{roles.email}</td>
            <td>{roles.role}</td>
            <button className='btn bg-red-600'>Delete</button>
          </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default AllSellers;