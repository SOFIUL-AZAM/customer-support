import React from 'react';

const Footer = () => {
    return (
        <div className='grid grid-cols-4 gap-7 p-7 mt-10 mx-auto bg-black'>
            <div className='ml-5'>
                <h1 className='font-bold text-white'>CS — Ticket System</h1>
                <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className='ml-5'>
                <h1 className='font-bold text-white'>Company</h1>
                <p className='text-gray-400'>About Us</p>
                <p className='text-gray-400'>Our Mission</p>
                <p className='text-gray-400'>Contact Saled</p>
            </div>

            <div className='ml-5'>
                <h1 className='font-bold text-white'>Services</h1>
                <p className='text-gray-400'>Product & Services</p>
                <p className='text-gray-400'>Customer Stories</p>
                <p className='text-gray-400'>Download Apps</p>
            </div>

            <div className='ml-5'>
                <h1 className='font-bold text-white'>Information</h1>
                <p className='text-gray-400'>Privacy Policy</p>
                <p className='text-gray-400'>Terms & Condition</p>
                <p className='text-gray-400'>Join Us</p>
            </div>
        </div>
    );
};

export default Footer;