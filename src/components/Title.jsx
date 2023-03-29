const Title = ({title, subtitle}) => {
    return (
        <div className="w-full flex flex-col items-center justify-center leading-[50px]">
            <h1 className="font-extrabold text-[40px]">{title}</h1>
            <h2 className="text-[#717171] break-all px-5 tracking-tighter">{subtitle}</h2>
        </div>
    )
}

export default Title
