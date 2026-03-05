import elipse from "../../../assets/Ellipse .png"
import dateicon from "../../../assets/datevector.png"

const OpenStatusCard = ({tickets}) => {
    const ticket = {
    "id": "TCK-1008",
    "title": "Slow dashboard loading on first visit",
    "description": "Dashboard takes 8-12 seconds to load on first visit. Needs optimization for initial bundle/data fetch.",
    "customer": "Jannatul Ferdous",
    "priority": "Low",
    "status": "Open",
    "createdAt": "2026-03-03T16:45:00+06:00"
  } 
    return (
        <div className="p-4 shadow-sm rounded">
            <div>
                <div className="flex items-center justify-between">
                    <h1 className='text-[#001931] pr-1 sm:pr-3 lg:pr-6 text-[18px] font-medium'>{ticket?.title}</h1>
                    <button className='font-medium rounded-full text-[#0B5E06] bg-[#96F6B7] px-1 flex justify-center items-center'> <img className="sm:pr-1" src={elipse} alt="elipse" /> Open</button>
                </div>
                <div className="pt-2 pb-4">
                    <p className="text-[#627382]">{ticket?.description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <p className="text-[#627382] font-medium text-[14px]">{ticket?.id}</p>
                        <p className="text-[#F83044] font-medium text-[14px] pl-4">{ticket?.priority}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#627382] font-medium text-[14px]">{ticket?.customer}</p>
                        <div className="text-[#627382] flex justify-center items-center font-medium text-[14px] pl-4"> <img className="pr-1" src={dateicon} alt="dateicon" /> <p>{new Intl.DateTimeFormat("en-GB").format(new Date(ticket?.createdAt))}</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenStatusCard;