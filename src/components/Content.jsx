import Title from "./Title";
import ContactCard from "./ContactCard";
import Footer from "./Footer";

const Content = () => {
    return (
        <div className="flex flex-col items-center space-y-14">
            <Title title={"Contact Us"} subtitle={"Any question or remarks? Just write us a message!"}/>
            <ContactCard/>
            <Footer/>
        </div>
    )
}

export default Content
