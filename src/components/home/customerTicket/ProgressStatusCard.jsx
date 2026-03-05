import React from "react";
import Swal from "sweetalert2";

const ProgressStatusCard = ({
  ticket,
  data,
  setData,
  setProgressCount,
  progessCount,
  resolveCount,
  setResolveCount,
}) => {
  const CompleteAlert = () =>
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, complete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        ticket.status = "Complete";
        const remainTickets = data.filter((t) => t?.id !== ticket?.id);
        remainTickets.push(ticket);
        setProgressCount(progessCount - 1);
        setResolveCount(resolveCount + 1)
        setData(remainTickets);

        Swal.fire({
          title: "Completed!",
          text: "Your file has been completed.",
          icon: "success",
        });
      }
    });
  return (
    <div className="p-2 rounded bg-base-100 mb-4 shadow-sm">
      <div>
        <p className="text-[#001931] text-[18px] font-medium">
          {ticket?.title}
        </p>
        <button
          onClick={CompleteAlert}
          className="text-white font-semibold rounded-sm bg-[#02A53B] w-full py-3 text-center my-4"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default ProgressStatusCard;
