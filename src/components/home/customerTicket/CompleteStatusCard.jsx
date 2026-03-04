import React from 'react';

const CompleteStatusCard = ({tickets}) => {
    const ticket = {
    "id": "TCK-1012",
    "title": "Toast notifications not showing on mobile",
    "description": "React-Toastify toasts appear on desktop but not visible on mobile view. Possibly z-index or container issue.",
    "customer": "Rumana Sultana",
    "priority": "Medium",
    "status": "Complete",
    "createdAt": "2026-03-04T17:15:00+06:00"
  }
    return (
        <div>
            <div>
                <p className='py-5 px-4 rounded-sm text-[#001931] font-medium text-[18px] bg-[#E0E7FF]'>{ticket?.title}</p>
            </div>
        </div>
    );
};

export default CompleteStatusCard;