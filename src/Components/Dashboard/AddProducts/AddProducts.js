import React from 'react';

const AddProducts = () => {
    const HandleSubmitProducts=(event)=>{
        event.preventDefault();
        const form = event.target;
        const productName=form.productName.value;
        const phoneNumber =form.phoneNumber.value;
        const price = form.price.value;
        const location = form.location.value;
        const category= form.category.value;
        const purchaseYear=form.purchaseYear.value;
        const description=form.description.value;
        const condition = form.condition.value;

        const details = {
            productName,
            phoneNumber,
            price,
            location,
            category,
            purchaseYear,
            description,
            condition
        }
        console.log(details)

    }
    return (
        <form onSubmit={HandleSubmitProducts} className='bg-blue-100'>
            <div className='mt-20 ml-6'>
                <div className='lg:flex gap-20'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input name='productName' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input name='phoneNumber' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                </div>
                <div className='lg:flex gap-20'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input name='price' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input name='location' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                </div>
                <div className='lg:flex gap-20'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input name='category' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Year of Purchase</span>
                    </label>
                    <input name='purchaseYear' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                </div>

                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea name='description' id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>

                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Condition</label>
                <textarea name='condition' id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your bike condition"></textarea>

            </div>
            <div className='grid content-center'>
            <input className='  btn btn-primary my-10 mb-32' type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default AddProducts;