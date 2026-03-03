import React from 'react';
// import vector1 from '../../assets/vector1.png'
// import vector2 from "../../assets/vector2.png"

const Banner = () => {
    return (
        <div className='flex-col mr-8 md:mr-0 md:flex md:flex-row gap-10 '>
           <div 
            className='text-center py-16 rounded-lg mt-12 m-4 p-4 w-full h-48 bg-linear-to-bl from-[#632EE3] to-[#9F62F2]'>
            
            <h1 className="text-2xl  text-white">In Progress</h1>
            <h1 className='text-3xl mt-2 text-white'>0</h1>
           </div>
           <div  
            className=" text-center py-16 w-full rounded-lg mt-12 m-4 p-4 h-48 bg-linear-to-bl from-[#00827A] to-[#54CF68]">
           <h1 className='text-2xl text-white '>Resolved</h1>
            <h1 className='text-3xl mt-2 text-white '>0</h1>
           </div>
        </div>
    );
};

export default Banner;