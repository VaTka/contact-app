import PhoneIcon from '../assets/phone-icon.svg'
import MailIcon from '../assets/mail-icon.svg'
import LocationIcon from '../assets/location-icon.svg'
import TwitterIcon from '../assets/twitter-icon.svg'
import InstagramIcon from '../assets/instagram-icon.svg'
import DiscordIcon from '../assets/discord-icon.svg'
import Plane from '../assets/plane.png'
import Elips from '../assets/Elips.png'
import Form from "./Form";
import CheckBox from "./CheckBox";
import Contacts from "./Contacts";

const ContactCard = () => {
    return (
        <div className="flex max-w-[1200px] bg-[#ffffff] p-3 rounded-2xl relative flex-col lg:flex-row">

            <div
                className="bg-[#000000] text-[#ffffff] p-[40px] w-full lg:w-6/12 lg:items-start flex flex-col items-center space-y-14 rounded-2xl rounded-br-none relative">

                <div>
                    <div><h3 className="text-[28px] font-medium">Contact Information</h3></div>
                    <div className="text-[#C9C9C9] tracking-wider text-[18px]">Say something to start a live chat!</div>
                </div>

                <div className="space-y-8 z-40">
                    <Contacts icon={PhoneIcon} content={"+1012 3456 789"}/>
                    <Contacts icon={MailIcon} content={"demo@gmail.com"}/>
                    <Contacts icon={LocationIcon}
                              content={"132 Dartmouth Street Boston, Massachusetts 02156 United States"}/>
                </div>

                <div className="flex space-x-5 lg:absolute bottom-8">
                    <img src={TwitterIcon} alt="TwitterIcon"
                         className="bg-[#1B1B1B] p-3 rounded-full hover:bg-[#ffffff] duration-500 cursor-pointer"/>
                    <img src={InstagramIcon} alt="InstagramIcon"
                         className="bg-[#1B1B1B] p-3 rounded-full hover:bg-[#ffffff] duration-500 cursor-pointer"/>
                    <img src={DiscordIcon} alt="DiscordIcon"
                         className="bg-[#1B1B1B] p-3 rounded-full hover:bg-[#ffffff] duration-500 cursor-pointer"/>
                </div>
                <img src={Elips} alt="Elips" className="absolute right-0 bottom-0 z-[1]"/>
            </div>


            <div className="p-8 pb-[0px] space-y-10 z-30">

                <div className="flex flex-wrap gap-[60px] lg:flex-row flex-col">
                    <Form label={"First Name"} size={"400px"}/>
                    <Form label={"Last Name"} size={"400px"}/>
                    <Form label={"Email"} size={"400px"}/>
                    <Form label={"Phone Number"} size={"400px"}/>
                </div>
                <div>
                    <div className="font-bold mb-5">Select Subject?</div>
                    <div className="flex flex-wrap gap-4 items-center justify-center">
                        <CheckBox title={"General Inquiry"}/>
                        <CheckBox title={"General Inquiry"}/>
                        <CheckBox title={"General Inquiry"}/>
                        <CheckBox title={"General Inquiry"}/>
                    </div>
                </div>
                <div>
                    <Form label={"Message"}/>
                </div>
                <div className="w-full flex justify-end items-end flex-col">
                    <div className="relative">
                        <button
                            className="bg-black text-white font-bold px-12 py-4 rounded-[5px] hover:bg-[#1c1c1c] duration-500 w-full lg:w-auto">
                            Send Message
                        </button>
                        <img src={Plane} alt="Plane" className="z-0 w-auto left-[-100px] relative"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactCard
