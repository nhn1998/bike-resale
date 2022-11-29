import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProducts = () => {
    const {data:products}=useQuery({
        queryKey:['addProducts'],
        queryFn:()=>fetch('https://assaingment-twelve-server-nhn1998.vercel.app/addProducts')
        .then(res=>res.json())
    })
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default MyProducts;