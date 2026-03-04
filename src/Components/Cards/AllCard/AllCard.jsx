import React, { use } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const AllCard = ({ customerPromise }) => {

    const customerData = use(customerPromise)


    return (
        <div className='flex gap-10 m-2 p-2 bg-base-100'>
            <div className='w-2/3 border-2'>
                <h1 className='text-3xl font-bold text-gray-700 p-2 '>Customer Tickets</h1>
            <div className='gap-5 grid md:grid-cols-2 p-2'>
                {
                    customerData.map(customer => <SingleCard key={customer.id} customer={customer}></SingleCard>)
                }
            </div>
            </div>
            <div className='border-2 w-1/3'>
                <h1 className='text-3xl font-bold text-gray-700 p-2'>Task Status</h1>
                <div>
                    <div>
                      <h1 className='btn'>complete button</h1>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-700 p-2'>Resolved Task</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCard;