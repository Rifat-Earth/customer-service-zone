import React from 'react';
import vector1 from '../../assets/vector1.png'


const Banner = ({ status, resolved }) => {


    return (
       
        <div className="flex flex-col md:flex-row justify-between  gap-5 m-4">
            <div
                className="relative bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl p-16 text-center text-white overflow-hidden flex-1">

                <img src={vector1} className="absolute left-0 top-0 h-full opacity-80"/>
                <img src={vector1} className="absolute right-0 top-0 h-full opacity-80  transform scale-x-[-1]"/>

                <h2 className="text-2xl mb-4">In-Progress</h2>
                <p className="text-6xl font-bold">{status.length}</p>

            </div>
                <div
                className="relative bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl p-16 text-center text-white overflow-hidden flex-1">

                <img src={vector1} className="absolute left-0 top-0 h-full opacity-80"/>
                <img src={vector1} className="absolute right-0 top-0 h-full opacity-80  transform scale-x-[-1]"/>

                <h2 className="text-2xl mb-4">Resolved</h2>
                <p className="text-6xl font-bold">{resolved.length}</p>

            </div>
        </div>
    );
};

export default Banner;