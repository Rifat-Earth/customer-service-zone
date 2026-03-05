import React from 'react';

const SingleCard = ({ customer, handleCustomer}) => {
    const { id, title, description, customerDetails,priority ,status ,createdAt} = customer
    return (
        <div onClick={()=>handleCustomer(customer)} className="card w-full bg-base-100 card-md shadow-lg">
            <div className="card-body">
                <div className='flex justify-between'>
                    <h1 className='text-lg font-bold text-gray-600'>{title}</h1>
                    <button className='btn rounded-4xl bg-[#B9F8CF] text-[#0B5E06]'><img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=8cZkMxbOqVFU&format=png&color=40C057" alt="" />{status}</button>
                </div>
                <div>
                    <p className='text-gray-500'>{description}</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex justify-center gap-2'>
                        <span className='text-gray-600 font-bold text-sm'>#100{id} </span>
                        <span className='text-red-600'>{priority}</span>
                    </div>
                    <div className='flex justify-center gap-2'>
                        <span className='text-gray-500'>{customerDetails.name} </span>

                        <img className='w-5 ml-2 h-5' src="https://img.icons8.com/?size=100&id=84997&format=png&color=737373" alt="calender icon" />

                        <span className='text-gray-600 font-semibold'>{createdAt}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleCard;