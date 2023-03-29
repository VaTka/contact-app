import FooterTitle from "./FooterTitle";
import Contacts from "./Contacts";
import PhoneIcon from "../assets/phone-icon.svg";
import MailIcon from "../assets/mail-icon.svg";
import LocationIcon from "../assets/location-icon.svg";

const Footer = () => {
    return (
        <footer className="bg-black text-white w-full flex flex-col items-center justify-center py-[60px] px-[40px]">
            <div className="font-bold text-[36px]">Logo Here</div>
            <div className="w-full">
                <hr className="border-white my-6 mt-10"/>
                <div className="flex gap-[60px] lg:justify-center justify-between items-center flex-wrap">
                    <div className="lg:max-w-full max-w-[200px]">
                        <FooterTitle title={"Reach us"}/>
                        <div className="space-y-4">
                            <Contacts icon={PhoneIcon} content={"+1012 3456 789"}/>
                            <Contacts icon={MailIcon} content={"demo@gmail.com"}/>
                            <Contacts icon={LocationIcon}
                                      content={"132 Dartmouth Street Boston, Massachusetts 02156 United States"}/>
                        </div>
                    </div>
                    <div className="lg:max-w-full max-w-[200px]">
                        <FooterTitle title={"Company"}/>
                        <div className="space-y-4">
                            <Contacts content={"About"}/>
                            <Contacts content={"Contract"}/>
                            <Contacts content={"Blogs"}/>
                        </div>
                    </div>
                    <div className="lg:max-w-full max-w-[200px]">
                        <FooterTitle title={"Legal"}/>
                        <div className="space-y-4">
                            <Contacts content={"Privacy Policy"}/>
                            <Contacts content={"Terms & Services"}/>
                            <Contacts content={"Terms of Use"}/>
                            <Contacts content={"Refund Policy"}/>
                        </div>
                    </div>
                    <div className="lg:max-w-full max-w-[200px]">
                        <FooterTitle title={"Quick Links"}/>
                        <div className="space-y-4">
                            <Contacts content={"Techlabz Keybox"}/>
                            <Contacts content={"Downloads"}/>
                            <Contacts content={"Forum"}/>
                        </div>
                    </div>
                    <div className="p-4 bg-[#1a1a1ac7] rounded-2xl space-y-4">
                        <FooterTitle title={"Join Our Newsletter"}/>
                        <div className="flex items-center justify-center">
                            <input type="text" className="bg-neutral-800 rounded-[3px] text-[10px] p-2 text-white outline-none placeholder-gray-700" placeholder="Your email address"/>
                            <button className="bg-black p-2 rounded-r-1xl text-[12px] hover:bg-white hover:text-black duration-500">Subscribe</button>
                        </div>
                        <div className="max-w-[200px] text-gray-400 text-[12px]">
                            * Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, molestias.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
