import Swal from "sweetalert2";
import elipse from "../../../assets/Ellipse .png";
import elipse2 from "../../../assets/Ellipse 22.png";
import dateicon from "../../../assets/datevector.png";

const OpenStatusCard = ({ ticket, data, setData, setProgressCount, progessCount }) => {
  const progressAlert = () =>
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, in progress it!",
    }).then((result) => {
      if (result.isConfirmed) {
        ticket.status = "In Progress";
        const remainTickets = data.filter((t)=> t?.id !== ticket?.id)
        remainTickets.push(ticket)
        setProgressCount(progessCount+1)
        console.log(progessCount);
        setData(remainTickets)

        Swal.fire({
          title: "Progress!",
          text: "Your file has been in progress.",
          icon: "success",
        });
      }
    });

  return (
    <div className="p-4 bg-base-100 shadow-sm rounded">
      <div onClick={progressAlert}>
        <div className="flex items-center justify-between">
          <h1 className="text-[#001931] max-w-65 pr-1 sm:pr-3 lg:pr-6 text-[18px] font-medium">
            {ticket?.title}
          </h1>
          <div>
            {ticket?.status === "Open" ? (
            <div>
              <button className="font-medium rounded-full text-[#0B5E06] bg-[#96F6B7] px-2 flex justify-center items-center">
                {" "}
                <img className="sm:pr-1" src={elipse} alt="elipse" />{" "}
                {ticket?.status}
              </button>
            </div>
          ) : (
            <div>
              <button className="font-medium rounded-full min-w-full text-[#9C7700] bg-[#F8F3B9] px-2 flex items-center">
                {" "}
                <img className="sm:pr-1" src={elipse2} alt="elipse" />{" "}
                {ticket?.status}
              </button>
            </div>
          )}
          </div>
        </div>
        <div className="pt-2 pb-4">
          <p className="text-[#627382]">{ticket?.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
            <p className="text-[#627382] font-medium text-[14px]">
              {ticket?.id}
            </p>
              {
              ticket?.priority === "High" && (<p className="text-red-500 font-medium text-[14px] pl-4">{ticket?.priority}</p>) ||
              ticket?.priority === "Low" && (<p className="text-green-600 font-medium text-[14px] pl-4">{ticket?.priority}</p>) ||
              ticket?.priority === "Medium" && (<p className="text-yellow-500 font-medium text-[14px] pl-4">{ticket?.priority}</p>)
              }
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#627382] font-medium text-[14px]">
              {ticket?.customer}
            </p>
            <div className="text-[#627382] flex justify-center items-center font-medium text-[14px] pl-4">
              {" "}
              <img className="pr-1" src={dateicon} alt="dateicon" />{" "}
              <p>
                {new Intl.DateTimeFormat("en-GB").format(
                  new Date(ticket?.createdAt),
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenStatusCard;
