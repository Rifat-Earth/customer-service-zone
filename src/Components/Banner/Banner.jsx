import React from 'react';
import vector1 from '../../assets/vector1.png'


const Banner = ({ status, resolved }) => {


    return (
        <div className='flex-col mr-8 md:mr-0 md:flex md:flex-row gap-10 '>

            <div className=' justify-between text-center py-20 rounded-lg mt-12 m-4 p-4 w-full h-64 bg-linear-to-bl from-[#632EE3] to-[#9F62F2] '
            >
                <div className='flex justify-center'>

                    <div>
                        <img className="border-" src={vector1} alt="" />
                    </div>

                    <div className='w-1/3'>
                        <h1 className="text-3xl text-white">In Progress</h1>
                        <h1 className='text-3xl mt-2 text-white'>{status.length}</h1>
                    </div>

                    <div>
                        <img className="transform scale-x-[-1]" src={vector1} alt="" />
                    </div>

                </div>


            </div>
            <div
                className=" text-center py-20 w-full rounded-lg mt-12 m-4 p-4 h-64 bg-linear-to-bl from-[#00827A] to-[#54CF68]">
                 <div className='flex justify-center'>

                    <div>
                        <img className="border-" src={vector1} alt="" />
                    </div>

                    <div className='w-1/3'>
                        <h1 className="text-3xl text-white">Resolved</h1>
                        <h1 className='text-3xl mt-2 text-white'>{resolved.length}</h1>
                    </div>

                    <div>
                        <img className="transform scale-x-[-1]" src={vector1} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;