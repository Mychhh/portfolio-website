import linkedin from '../../img/linkedin-logo.png';
import instagram from '../../img/instagram-logo.png';
import facebook from '../../img/facebook-logo.png';
import tiktok from '../../img/tiktok-logo.png';
import github from '../../img/github.png'

const Socials = () => {
    return (
        <>
            <div className='flex flex-row gap-x-3'>
                <a href="https://www.linkedin.com/in/michaeldrpabaya/" target='_blank'><img src={linkedin} alt="linkedin-logo" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full' /></a>
                <a href="https://github.com/Mychhh" target='_blank'><img src={github} alt="github-logo" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full bg-white' /></a>
                <a href="https://www.instagram.com/" target='_blank'><img src={instagram} alt="instagram-logo" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full' /></a>
                <a href="https://www.tiktok.com/@chael.404?lang=en" target='_blank'><img src={tiktok} alt="tiktok-logo" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full' /></a>
                <a href="https://web.facebook.com/chael.pabaya" target='_blank'><img src={facebook} alt="faceboook-logo" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full' /></a>
            </div>
        </>
    );
}

export default Socials;