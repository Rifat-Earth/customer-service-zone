import React from 'react';

const Resolved = ({ resolvedTask }) => {
    console.log(resolvedTask);
    return (
        <div className="card w-72 md:w-full bg-base-100 card-xs shadow-lg mt-4">
            <div className="card-body">
                <h1 className='card-title text-2xl italic text-gray-400'>Resolved</h1>
            <p className='text-xl text-gray-500'>{resolvedTask.title}</p>
                
            </div>
        </div>

    );
};

export default Resolved;