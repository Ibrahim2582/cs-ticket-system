import { useEffect, useState } from "react";
import ticketdata from "../../ticketData/ticketdata.json";
import OpenStatusCard from "./OpenStatusCard";
import CompleteStatusCard from "./CompleteStatusCard";
import ProgressStatusCard from "./ProgressStatusCard";

const CustomerTicket = ({
  setResolveCount,
  setProgressCount,
  progessCount,
  resolveCount,
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(ticketdata);
  }, []);

  return (
    <div className="py-8 sm:py-16 lg:py-20 grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-12">
      <div className="grid lg:col-span-8 gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        {data.map(
          (ticket) =>
            ["Open", "In Progress"].includes(ticket?.status) && (
              <OpenStatusCard
                key={ticket?.id}
                ticket={ticket}
                data={data}
                setData={setData}
                setProgressCount={setProgressCount}
                progessCount={progessCount}
              />
            ),
        )}
        {/* {data.map(
          (ticket) =>
            ticket?.status === "Open" && (
              <OpenStatusCard
                key={ticket?.id}
                ticket={ticket}
                data={data}
                setData={setData}
                setProgressCount={setProgressCount}
                progessCount={progessCount}
              />
            ),
        )}
        {data.map(
          (ticket) =>
            ticket?.status === "In Progress" && (
              <OpenStatusCard
                key={ticket?.id}
                ticket={ticket}
                data={data}
                setData={setData}
                setProgressCount={setProgressCount}
                progessCount={progessCount}
              />
            ),
        )} */}
      </div>
      <div className="flex lg:col-span-4 flex-col">
        <div>
          <div className="pb-4">
            <p className="text-2xl font-semibold text-[#34485A]">Task Status</p>
            {
              progessCount === 0 && <p className="text-[#627382] mt-4">Select a ticket to add to Task Status</p>
            }
          </div>
          {data.map(
            (ticket) =>
              ticket?.status === "In Progress" && (
                <ProgressStatusCard
                  key={ticket?.id}
                  ticket={ticket}
                  data={data}
                  setData={setData}
                  resolveCount={resolveCount}
                  setResolveCount={setResolveCount}
                  setProgressCount={setProgressCount}
                  progessCount={progessCount}
                />
              ),
          )}
        </div>
        <div>
          <div className="pb-4">
            <p className="text-2xl font-semibold text-[#34485A]">
              Resolved Task
            </p>
            {
              resolveCount === 0 && <p className="text-[#627382] mt-4">No resolved tasks yet.</p>
            }
          </div>
          {data.map(
            (ticket) =>
              ticket?.status === "Complete" && (
                <CompleteStatusCard
                  key={ticket?.id}
                  ticket={ticket}
                  data={data}
                  setData={setData}
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;
