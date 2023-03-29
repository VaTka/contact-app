const Form = ({label, size = "100%"}) => {
    return (
        <form className={`flex flex-col w-[${size}]`}>
            <label htmlFor="name" className="text-[#8D8D8D]">{label}</label>
            <input
                type="text" name={label} placeholder={`Enter ${label}`}
                className="w-full border-b-2 border-[#8D8D8D] text-[#8D8D8D] focus:border-[#000000] focus:text-[#000000] outline-none duration-500 py-3 bg-none"
            />
        </form>
    )
}

export default Form
