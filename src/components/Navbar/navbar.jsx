import React from 'react';

const navbar = () => {
    return (
        <div className='bg-white'>
            <div className='flex justify-between max-w-[1200px] mx-auto items-center p-2'>
            <h2 className='font-bold'>CS — Ticket System</h2>
            <div className='flex gap-3 items-center'>
                <h3>Home</h3>
                <h3>FAQ</h3>
                <h3>Changelog</h3>
                <h3>Blog</h3>
                <h3>Download</h3>
                <h3>Contact</h3>
                <button className='rounded bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] p-3'>+ New Ticket</button>
            </div>
        </div>
        </div>
    );
};

export default navbar;