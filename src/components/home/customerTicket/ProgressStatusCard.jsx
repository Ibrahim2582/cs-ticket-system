import React from 'react';

const ProgressStatusCard = ({tickets}) => {
    const ticket = {
    "id": "TCK-1006",
    "title": "Profile update shows success but data unchanged",
    "description": "User updates phone number and address. Toast shows success but refreshed profile still shows old data.",
    "customer": "Mim Chowdhury",
    "priority": "High",
    "status": "In Progress",
    "createdAt": "2026-03-03T09:30:00+06:00"
  }
    return (
        <div className='p-g'>
            <div>
                <p className='text-[#001931] text-[18px] font-medium'>{ticket?.title}</p>
                <button className='text-white font-semibold rounded-sm bg-[#02A53B] w-full py-3 text-center my-4'>Complete</button>
            </div>
        </div>
    );
};

export default ProgressStatusCard;