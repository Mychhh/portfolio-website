import linkedin from '../../img/linkedin-logo.png';
import instagram from '../../img/instagram-logo.png';
import facebook from '../../img/facebook-logo.png';
import tiktok from '../../img/tiktok-logo.png';
import github from '../../img/github.png'

const Socials = () => {
    return (
        <>
            <div className='flex flex-row gap-x-3'>
                <a href="#"><img src={linkedin} alt="faceboook-logo" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full' /></a>
                <a href="#"><img src={github} alt="github-logo" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full bg-white' /></a>
                <a href="#"><img src={instagram} alt="faceboook-logo" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full' /></a>
                <a href="#"><img src={tiktok} alt="faceboook-logo" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full' /></a>
                <a href="#"><img src={facebook} alt="faceboook-logo" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full' /></a>
            </div>
        </>
    );
}

export default Socials;