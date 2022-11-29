
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../Auth/AuthProvider';

const AllSellers = () => {
    const { data: sellerRoles = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('https://assaingment-twelve-server-nhn1998.vercel.app/users?role=Sellers')
            .then(res => res.json())
    })
    console.log(sellerRoles)
    const HandleDelete = id => {
        if (id) {
            alert('are you want to delete?')
            fetch(`https://assaingment-twelve-server-nhn1998.vercel.app/allSellers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        console.log(data)
                        refetch()
                        toast.success('User Deleted Successfully')
                    }
                })
        }
    }
    if (isLoading) {
        return <p>Loading</p>
    }
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
                        sellerRoles.map(roles => <tr key={roles._id}>
                            <td>{roles.name}</td>
                            <td>{roles.email}</td>
                            <td>{roles.role}</td>
                            <button onClick={() => HandleDelete(roles._id)} className='btn bg-red-600'>Delete</button>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;