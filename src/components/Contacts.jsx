const Contacts = ({icon, content}) => {
    return (
        <div className="flex mb-5 hover:border-b-[1px] border-[#ffffff] duration-100 cursor-pointer lg:flex-row flex-col items-center z-1">
            {icon && <img src={icon} alt={`${icon}`} className="mr-5 h-6 w-6"/>}
            <div>{content}</div>
        </div>
    )
}

export default Contacts
