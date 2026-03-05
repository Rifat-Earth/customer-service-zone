import React, { use } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import TaskStatus from '../../TaskStatus/TaskStatus';


const AllCard = ({ customerPromise,handleCustomer,status }) => {

    const customerData = use(customerPromise)
   


    return (
        <div className='flex flex-col md:flex-row gap-10 m-2 p-2 bg-base-100'>
            <div className='w-2/3 '>
                <h1 className='text-3xl font-bold text-gray-700 p-2 '>Customer Tickets</h1>
                <div className='gap-5 grid md:grid-cols-2 p-2'>
                    {
                        customerData.map(customer => <SingleCard key={customer.id} handleCustomer={handleCustomer} customer={customer}></SingleCard>)
                    }
                </div>
            </div>
            <TaskStatus status={status} key={status.id}></TaskStatus>
            
        </div>
    );
};

export default AllCard;