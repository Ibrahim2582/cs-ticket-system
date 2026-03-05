import React from "react";

const CompleteStatusCard = ({ ticket, data, setData }) => {

  return (
    <div>
      <div className="mb-4">
        <p className="py-5 px-4 rounded-sm text-[#001931] font-medium text-[18px] bg-[#E0E7FF]">
          {ticket?.title}
        </p>
      </div>
    </div>
  );
};

export default CompleteStatusCard;
