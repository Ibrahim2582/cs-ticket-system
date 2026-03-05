import vectorImage1 from "../../assets/vector1.png"
import vectorImage2 from "../../assets/vector2.png"
const Hero = () => {
    return (
        <div>
            <div className='grid relative overflow-hidden grid-rows-2 gap-4 sm:gap-6 lg:grid-rows-1 lg:grid-cols-2 py-6 sm:py-10 lg:py-20'>
                <div className='bg-red-200 shadow-sm rounded items-center justify-center flex flex-col max-h-64 lg:min-h-64 bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
                    <h1 className='sm:text-2xl text-xl pb-2 sm:pb-4'>In-Progress</h1>
                    <p className='text-4xl sm:text-6xl font-semibold'>0</p>
                    <img className="absolute left-0" src={vectorImage1} alt="vectorImage" />
                    <img className="absolute right-0" src={vectorImage1} alt="vectorImage" />
                </div>
                <div className='shadow-sm rounded relative overflow-hidden items-center justify-center flex flex-col max-h-64 lg:min-h-64 bg-linear-to-r from-[#54CF68] to-[#006C82]'>
                    <h1 className='sm:text-2xl text-xl pb-2 sm:pb-4'>Resolved</h1>
                    <p className='text-4xl sm:text-6xl font-semibold'>0</p>
                    <img className="absolute left-0" src={vectorImage1} alt="vectorImage" />
                    {/* <img className="absolute right-0" src={vectorImage1} alt="vectorImage" /> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
