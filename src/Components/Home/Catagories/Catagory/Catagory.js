import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({catagory}) => {
    const {name,img,catagoryId}=catagory;
    return (
        <div className="card card-compact mt-10 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions justify-end">
      <Link to={`/catagories/${catagoryId}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Catagory;