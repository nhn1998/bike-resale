import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../Auth/AuthProvider';
import MyProductsSub from './MyProductsSub/MyProductsSub';

const MyProducts = () => {
    const { user } = useContext(authContext)
    const { data: products,refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch(`https://assaingment-twelve-server-nhn1998.vercel.app/products?email=${user.email}`)
            .then(res => res.json())
    })
    console.log(products)
    const HandleDelete=id=>{
        if(id){
            alert('are you want to delete this item?')
            fetch(`https://assaingment-twelve-server-nhn1998.vercel.app/addProducts/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged){
                    console.log(data)
                    refetch()
                    toast.success('item deleted successfully')
                }
                
            })
        }
    }
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Phone Number</th>
        <th>price</th>
        <th>Sales Status</th>
        <th>Category</th>
        <th>Description</th>
        <th>Condition</th>
        <th>Remove</th>


      </tr>
    </thead>
    <tbody>
        {
            products?.map(product=><tr key={product._id}>
                <td>{product.productName}</td>
                <td>{product.phoneNumber}</td>
                <td>{product.price}</td>
                <button className='btn bg-green-500'>Available</button>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.condition}</td>
                <button onClick={()=>HandleDelete(product._id)} className='btn bg-red-600'>Delete</button>
              </tr>)
        }
    </tbody>
  </table>
</div>
    );
};

export default MyProducts;