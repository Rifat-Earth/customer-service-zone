import React from 'react';
import Task from './Task/Task';

const TaskStatus = ({ status }) => {

    return (
        <div className=' w-1/3'>
            <h1 className='text-3xl font-bold text-gray-700 p-2'>Task Status</h1>


            <div className='py-1'>
                {
                    status.map(task => <Task task={task} key={task.id}></Task>)
                }
            </div>


            <div className='py-5'>

            </div>
            <div className='p-2 py-6'>
                <h1 className='text-3xl font-bold text-gray-700 '>Resolved Task</h1>
                <div className='text-gray-500 text-lg'>No resolved task yet....</div>
            </div>
        </div>

    );
};

export default TaskStatus;