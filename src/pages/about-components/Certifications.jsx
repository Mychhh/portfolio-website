import profile from '../../img/SampleImage.webp';
import kodego from '../../img/KodeGoCertificate.webp';
import oracle from '../../img/OracleDatabase.webp';
import sap from '../../img/SAPBusinessOne.webp';

import close from '../../img/close.webp'
import { useState } from 'react';

const Certifications = () => {

    const [certifications, setCertifications] = useState(
        [
            {id: 1, certificateDescription: 'Sheesh', certificateImg: kodego},
            {id: 2, certificateDescription: 'Sheesh', certificateImg: oracle},
            {id: 3, certificateDescription: 'Sheesh', certificateImg: sap},
        ]
    );

    const [showImg, setShowImg] = useState(false);
    const [imgX, setImgX] = useState(null);

    const handleClick = () => {
        setShowImg(!showImg);
    };

    const handleImgX = (imgx) => {
        setImgX(imgx);
    }

    return (
        <>
            {showImg &&
            <div className='flex justify-center items-center fixed top-0 left-0 z-10 w-full h-full bg-slate-300 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-40'
            onClick={handleClick}>
                <div className='flex justify-center items-center w-full mx-2 md:mx-0 md:w-6/12 md:h-6/12 relative'>
                    <img src={imgX} alt="Certificate Image" className=''/>
                </div>
            </div>
            }

            <div className='w-10/12 mx-auto  my-5 '>
                <p className="text-base font-bold text-2xl border-b-solid border-b border-b-black inline">Certifications</p>
            </div>

            <div className='flex flex-col gap-y-2'>
                {certifications.map((certificate, key) => {
                    return(
                        <div className='flex flex-col w-10/12 mx-auto relative' key={certifications.id}>
                            
                            {/* <p className='absolute top-1/3 left-1/3 right-1/3 bottom-1/3 font-semibold text-lg'>From KodeGo</p> */}
                            
                            <button onClick={() => {
                                handleClick();
                                handleImgX(certificate.certificateImg);
                            }}>    
                                <img src={certificate.certificateImg} alt="Certificate Image" className='rounded hover:scale-110 duration-200 border border-solid border-black dark-border-white' />
                            </button>

                            <p className='text-start text-base py-2 px-1 border-b border-b-black dark:border-b-white mb-2'>
                                {/* {certificate.certificateDescription} */}
                            </p>
                        
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Certifications;