
import Resolved from './Resolved/Resolved';
import Task from './Task/Task';

const TaskStatus = ({ status,handleCompleteBtn ,resolved}) => {
    

    return (
        <div className=' w-1/3'>
            <h1 className='text-3xl font-bold text-gray-700 p-2'>Task Status</h1>
            <div className='py-1'>
                {status.length > 0 ? (
                    status.map(task => <Task task={task} key={task.id} handleCompleteBtn={handleCompleteBtn} />)
                ) : (
                    <p className="text-gray-500 text-xl p-2 italic">No tasks added yet</p>
                )}
            </div>
            <div className='py-5'>

            </div>
            <div className='p-2 py-6'>
                <h1 className='text-3xl font-bold text-gray-700 '>Resolved Task</h1>
                <div className='py-4'>
                    {
                    resolved.length > 0?
                    resolved.map(resolvedTask => <Resolved resolvedTask = {resolvedTask} key={resolvedTask.id}></Resolved>
                        
                    ):<div className='text-gray-500 text-xl italic p-2'>No resolved task yet....</div>
                }
                </div>
               
            </div>
        </div>

    );
};

export default TaskStatus;