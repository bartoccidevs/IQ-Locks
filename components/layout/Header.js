import CustomImage from "../CustomImage";
import { useState } from "react"

const navlinks = [
    { lable: 'Home', link: "/" },
    { lable: "About", link: "/about" },
    { lable: "Blog", link: "/blog" },
    { lable: "Contact", link: "/contact" },
]

export default function Header() {
    const [isOpenHamburger, setIsOpenHamburger] = useState(false);
    function handleHamburgerClick() {
        setIsOpenHamburger(!isOpenHamburger)
    }
    
    return (
        <header>
            <div className="navbar fixed w-full bg-theme-primary">
                <div className="nav-container py-4 inline-padding flex justify-between items-center">
                    <a href="/">
                        <CustomImage src="/assets/icons/logo.svg" className="h-14 w-20 cursor-pointer" alt="logo"/>
                    </a>
                    <div onClick={handleHamburgerClick} className="cursor-pointer">
                        <div className="
                        hamburger-menu bg-theme-text-contrast
                        before:-translate-y-3 before:bg-theme-text-contrast
                        after:translate-y-3 after:bg-theme-text-contrast" 
                        />
                    </div>
                </div>
            </div>
            <div className={isOpenHamburger ? 'active-hamburger-side-bar translate-y-20 bg-theme-primary':'hamburger-side-bar'}>
                <ul className="list-none mx-4 md:mx-16 pt-10">
                    {navlinks.flatMap((link, i) => (
                        <li key={i} className="py-2">
                            <a className="text-theme-text-contrast text-3xl font-bold"
                            href={link.link}>{link.lable}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}