import React from 'react';
import bg1 from '../../assets/vector1.png'

const banner = ({purchasedTicket,resolvedTicket}) => {
    return (
        <div className='max-w-[1200px] mx-auto md:flex justify-between mt-5'>

            <div className='mb-2 rounded-[7px] relative px-57 py-23 overflow-hidden bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                <img src={bg1} className="absolute left-0 top-0" alt="left" />

                <img src={bg1} className='absolute right-0 top-0 scale-x-[-1]' alt="right" />

                <div className='relative flex flex-col justify-center items-center text-white font-bold text-2xl'>
                    <h2>In-Progress</h2>
                    <h2 className='text-center'>{purchasedTicket}</h2>
                </div>
            </div>

            <div className='mb-2 rounded-[7px] relative px-57 py-23 overflow-hidden bg-gradient-to-r from-[#54CF67] to-[#00827A]'>
                <img src={bg1} className="absolute left-0 top-0" alt="left" />

                <img src={bg1} className='absolute right-0 top-0 scale-x-[-1]' alt="right" />

                <div className='relative flex flex-col justify-center items-center text-white font-bold text-2xl'>
                    <h2>Resolve</h2>
                    <h2 className='text-center'>{resolvedTicket}</h2>
                </div>
            </div>
            
        </div>
    );
};

export default banner;