import React from 'react';


const Task = ({ task,handleCompleteBtn }) => {

   

    return (
        <>
           
                <div className="card w-72 md:w-full bg-base-100 card-xs shadow-lg mt-4">
                    <div className="card-body py-5">
                        <h2 className="card-title w-full text-xl font-bold text-gray-700">{task.title}</h2>
                        <button onClick={() => handleCompleteBtn(task)} className='btn bg-green-600 text-white text-lg'>Complete</button>
                    </div>
                </div>
           
        </>
    );
};

export default Task;