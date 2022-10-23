import PagesHeader from "./components/PagesHeader";
import ContactContent from "./contact-components/ContactContent";

const ContactPage = () => {

    document.title = "Contacts - Michael"; 

    return ( 
        <div className="dark:bg-[#121212]">
            <PagesHeader/>
            <ContactContent/>
        </div>
    );
}
 
export default ContactPage;