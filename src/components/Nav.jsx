import {useState} from "react";
import CircleIcon from "../assets/menu-circle.svg"
import CloseIcon from "../assets/close-burger-icon.svg"
import BurgerIcon from "../assets/burger-icon.svg"

const Nav = () => {
    const [featuresToggle, setFeaturesToggle] = useState(false)
    const [burgerToggle, setBurgerToggle] = useState(false)

    const featuresHandler = () => {
        setFeaturesToggle(!featuresToggle)
    }
    const burgerHandler = () => {
        setBurgerToggle(!burgerToggle)
    }

    return (
        <nav
            className={`flex lg:flex-row flex-col lg:items-center justify-between text-[#1f1f1] py-[40px] lg:px-[120px] px-[40px] items-start ${!burgerToggle ? 'bg-transparent' : 'bg-black'} lg:bg-transparent text-white lg:text-black lg:relative w-full z-40 duration-500`}>
            <div className="text-[24px] font-bold flex justify-between lg:w-auto w-full">
                {burgerToggle!==true ?
                    <div className="text-black">Logo Here</div>
                    :
                    <div className="text-white">Logo Here</div>
                }
                {burgerToggle ?
                    <img src={CloseIcon} alt="CloseIcon" className="cursor-pointer z-30" onClick={burgerHandler}/>
                    :
                    <img src={BurgerIcon} alt="BurgerIcon" className="cursor-pointer lg:opacity-0 opacity-100 z-30" onClick={burgerHandler}/>
                }
            </div>
            <ul className={`flex gap-10 items-start lg:pl-auto pl-[40px] lg:flex-row flex-col mt-9 lg:mt-auto lg:opacity-100 ${!burgerToggle ? 'opacity-0' : "opacity-100"} transition-all ease-in duration-500 lg:relative absolute lg:bg-transparent lg:w-auto bg-black w-full left-0 z-40`}>
                <li>Home</li>
                <li onClick={featuresHandler} className="after:content-NavArrow">
                    Features
                    {featuresToggle &&
                        <div className={`absolute top-20 bg-neutral-100 p-3 flex flex-col items-center space-y-2`}>
                            <div>Menu1</div>
                            <div>Menu2</div>
                            <div>Menu3</div>
                        </div>
                    }
                </li>
                <li>Blog</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
                <div className="flex gap-4 flex-row ">
                    <li><img src={CircleIcon} alt={"circle"} className="h-5 w-5"/></li>
                    <li><img src={CircleIcon} alt={"circle"} className="h-5 w-5"/></li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav
