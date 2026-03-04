import { useEffect, useState } from "react";
import ticketdata from "../../ticketData/ticketdata.json";
import OpenStatusCard from "./OpenStatusCard";

const CustomerTicket = () => {
  const [data, setData] = useState(ticketdata);

  console.log(data);

  return (
    <div className="py-8 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12">
      <div className="grid lg:col-span-8 gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        <OpenStatusCard />
        <OpenStatusCard />
        <OpenStatusCard />
        <OpenStatusCard />
        <OpenStatusCard />
        <OpenStatusCard />
        <OpenStatusCard />
      </div>
      <div className="flex lg:col-span-4 flex-col">
        <div>
            <div className="pb-4">
                <p className="text-2xl font-semibold text-[#34485A]">Task Status</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;
