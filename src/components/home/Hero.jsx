import vectorImage from "../../assets/Vector.svg"
const Hero = () => {
    return (
        <div>
            <div className='grid grid-rows-2 gap-4 sm:gap-6 lg:grid-rows-1 lg:grid-cols-2 py-6 sm:py-10 lg:py-20'>
                <div className='bg-red-200 items-center justify-center flex flex-col max-h-64 lg:min-h-64 bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>
                    <h1 className='sm:text-2xl text-xl pb-2 sm:pb-4'>In-Progress</h1>
                    <p className='text-4xl sm:text-6xl font-semibold'>0</p>
                </div>
                <div className='bg-green-500 items-center bg-[url(../../assets/Vector.svg)] justify-center flex flex-col max-h-64 lg:min-h-64 bg-linear-to-br from-[#54CF68] to-[#00827A]'>
                    <h1 className='sm:text-2xl text-xl pb-2 sm:pb-4'>Resolved</h1>
                    <p className='text-4xl sm:text-6xl font-semibold'>0</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
