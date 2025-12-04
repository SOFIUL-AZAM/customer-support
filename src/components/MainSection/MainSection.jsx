import React, { use } from 'react';
import Img2 from '../../assets/ri_calendar-line.png'

const statusColor ={
    Open: "bg-green-200",
    Pending: "bg-yellow-200",
    Resolved: "bg-blue-200"
}

const dotColor ={
    Open: "bg-green-500",
    Pending: "bg-yellow-500",
    Resolved: "bg-blue-500"
}
const textColor ={
    Open: "text-green-500",
    Pending: "text-yellow-500",
    Resolved: "text-blue-500"
}


const MainSection = ({customersPromise}) => {

    const customerData = use(customersPromise)
    console.log(customerData)
    return (

        
        <div className='mt-8 max-w-[1200px] mx-auto'>

            <div className='flex justify-between  '>

            <div className='grid grid-cols-2 gap-2 mr-3'>
                {
                customerData.map(customer =><button>
                <div className='w-110 h-35 bg-white shadow-lg rounded-[6px] p-4'>
                    <div className='flex justify-between border-red-400'>
                        <h1 className='font-bold'>{customer.title}</h1>
                        <h2 className={`flex gap-2 items-center rounded-2xl p-0.5 font-medium ${textColor[customer.status]}  ${statusColor[customer.status]}`}> <div className={`h-3 w-3 rounded-full ${dotColor[customer.status]} `}></div> {customer.status}</h2>
                    </div>
                    <p className='text-gray-500'>{customer.description}</p>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <p className='text-gray-500'>{customer.id}</p>
                            <h2 className='text-red-500'>{customer.priority}</h2>
                        </div>
                        <div className='flex gap-2'>
                            <p className='text-gray-500'>{customer.customer}</p>
                            <p className='text-gray-500 flex gap-1'><img className='invert' src={Img2} alt="" />{customer.createdAt}</p>
                        </div>
                    </div>

                </div>
            </button> )
            }
            </div>
            

            <div>
                <div>
                    <h1 className='font-bold text-4xl'>Task Status</h1>
                    <p className='text-gray-500'>Select a ticket to add to Task Status</p>
                </div>

                <div>
                    <h1 className='font-bold text-4xl'>Resolved Task</h1>
                    <p className='text-gray-500'>No resolved tasks yet.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MainSection;