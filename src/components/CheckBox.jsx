const CheckBox = ({title}) => {
    return (
        <label className="flex items-center">
            <input type="checkbox" className="w-4 h-4 accent-black inline-block border-8 bg-red-600"/>
            <span className="ml-2">{title}</span>
        </label>
    )
}

export default CheckBox
