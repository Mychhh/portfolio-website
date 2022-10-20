import up from '../../img/UpButton.png'

import { useState, useEffect } from "react";

const BackToTopButton = () => {

    const [BackToTop, setBackToTop] = useState(false);

    useEffect(() => {
        
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })

    },[])


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (  
        <>  
            {BackToTop 
                && 
            <button className="fixed w-7 bottom-5 right-5 md:bottom-10 md:w-10 md:right-10"
            onClick={scrollUp}><img src={up} alt="up" /></button>}  
        </>
    );
}
 
export default BackToTopButton;