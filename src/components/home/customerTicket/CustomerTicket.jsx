import { useEffect, useState } from "react";
import ticketdata from "../../ticketData/ticketdata.json";
import OpenStatusCard from "./OpenStatusCard";
import ProgressStatusCard from "./progressStatusCard";
import CompleteStatusCard from "./CompleteStatusCard";

const CustomerTicket = ({setResolveCount, setProgressCount}) => {
  const [data, setData] = useState(ticketdata);

  console.log({setResolveCount, setProgressCount});

  return (
    <div className="py-8 sm:py-16 lg:py-20 grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-12">
      <div className="grid lg:col-span-8 gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        {
              ticketdata.map(ticket => ticket?.status === "Open" && <OpenStatusCard key={ticket?.id} />)
            }
      </div>
      <div className="flex lg:col-span-4 flex-col">
        <div>
            <div className="pb-4">
                <p className="text-2xl font-semibold text-[#34485A]">Task Status</p>
            </div>
            {
              ticketdata.map(ticket => ticket?.status === "In Progress" && <ProgressStatusCard key={ticket?.id} />)
            }
        </div>
        <div>
            <div className="pb-4">
                <p className="text-2xl font-semibold text-[#34485A]">Resolved Task</p>
            </div>
            <CompleteStatusCard />
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;
