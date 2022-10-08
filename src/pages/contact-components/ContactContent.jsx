import Meeting from "./Meeting";
import Email from "./Email";

const ContactContent = () => {
    return ( 
        <>
            <div className="w-10/12 mx-auto py-5 dark:text-white">

                <div className="flex flex-col  mt-10 md:mt-15 md:flex-row gap-10 items-center justify-center">
                    <Meeting/>
                    <Email/>
                </div>

            </div>
        </>
    );
}
 
export default ContactContent;