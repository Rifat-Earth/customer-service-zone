import React from 'react';
import { toast } from 'react-toastify';

const Task = ({ task }) => {

    const handleCompleteBtn =()=>{
        toast("complete button clicked")
    }

    return (
        <>
           
                <div className="card w-96 bg-base-100 card-xs shadow-lg mt-4">
                    <div className="card-body py-5">
                        <h2 className="card-title text-xl font-bold text-gray-700">{task.title}</h2>
                        <button onClick={handleCompleteBtn} className='btn bg-green-600 text-white text-lg'>Complete</button>
                    </div>
                </div>
           
        </>
    );
};

export default Task;