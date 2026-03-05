import React from 'react';

const Task = ({ task }) => {

    return (
        <>
           
                <div className="card w-96 bg-base-100 card-xs shadow-lg mt-4">
                    <div className="card-body py-5">
                        <h2 className="card-title text-xl font-bold text-gray-700">{task.title}</h2>
                        <button className='btn bg-green-600 text-white text-lg'>Complete</button>
                    </div>
                </div>
           
        </>
    );
};

export default Task;