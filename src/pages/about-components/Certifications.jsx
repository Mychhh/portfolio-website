import profile from '../../img/SampleImage.jpg';

const Certifications = () => {
    return (
        <>
            <p className="text-base md:text-4xl font-bold py-5">Certifications</p>

            <div className='flex flex-col gap-y-2'>
                <div className='flex flex-col w-10/12 mx-auto'>
                    <img src={profile} alt="SampleImage" className='rounded' />
                    <p className='text-base py-1 border-b border-b-black dark:border-b-white mb-2'>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className='flex flex-col w-10/12 mx-auto'>
                    <img src={profile} alt="SampleImage" className='rounded' />
                    <p className='text-base py-1 border-b border-b-black dark:border-b-white mb-2'>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className='flex flex-col w-10/12 mx-auto'>
                    <img src={profile} alt="SampleImage" className='rounded' />
                    <p className='text-base py-1 border-b border-b-black dark:border-b-white mb-2'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </>
    );
}

export default Certifications;