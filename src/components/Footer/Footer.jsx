import React from 'react';
import Img1 from '../../assets/fi_5968764.png'
import Img2 from '../../assets/fi_5969020.png'
import Img3 from '../../assets/fi_6244710.png'
import Img4 from '../../assets/Group.png'

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='grid grid-cols-5 gap-7 p-7 mt-10 mx-auto'>
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

            <div className='ml-5'>
                <h1 className='font-bold text-white'>Social Links</h1>
                <p className='text-gray-400 flex gap-0.5'><img className='w-5 h-5' src={Img2} alt=""/>@CS — Ticket System</p>
                <p className='text-gray-400 flex gap-0.5'><img className='w-5 h-5' src={Img4} alt=""/>@CS — Ticket System</p>
                <p className='text-gray-400 flex gap-0.5'><img className='w-5 h-5' src={Img1} alt=""/>@CS — Ticket System</p>
                <p className='text-gray-400 flex gap-0.5'><img className='w-5 h-5' src={Img3} alt=""/>support@cst.com</p>
            </div>
        </div>
        
        <div className='border-t-2 p-2'>
            <h2 className='text-gray-300 text-center'>© 2025 CS — Ticket System. All rights reserved.</h2>
        </div>
        </div>
    );
};

export default Footer;