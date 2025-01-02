import Link from "next/link";
import CustomImage from "../CustomImage";
import GTMEvent from "../GTMEvent";
import { useState } from "react"
import ThemeSwitch from "../ThemeSwitch";

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
            <div className="
            bg-theme-background dark:bg-theme-background-dark
            border-theme-divider dark:border-theme-divider-dark
            navbar fixed w-full">
                <div className="nav-container pt-4 pb-2 inline-padding flex justify-between items-center">
                    <a href="/" onClick={() => GTMEvent({eventName: "Link Click", eventVal: "home logo"})}>
                        <CustomImage src="/assets/icons/logo.svg" className="h-14 w-20 cursor-pointer" alt="IQ Locks logo" priority/>
                    </a>
                    <div onClick={handleHamburgerClick} className="cursor-pointer">
                        <div className="lg:hidden
                        hamburger-menu bg-theme-text dark:bg-theme-text-dark
                        before:-translate-y-3 before:bg-theme-text before:dark:bg-theme-text-dark
                        after:translate-y-3 after:bg-theme-text after:dark:bg-theme-text-dark" 
                        />
                    </div>
                </div>
            </div>
            <div className={isOpenHamburger ? 'active-hamburger-side-bar translate-y-20 bg-theme-primary':'hamburger-side-bar'}>
                <ul className="list-none mx-4 md:mx-16 pt-10">
                    {navlinks.flatMap((link, i) => (
                        <li key={i} className="py-2">
                            <a className="text-theme-text-contrast text-3xl font-bold"
                            href={link.link}
                            onClick={() => GTMEvent({eventName: "Link Click", eventVal: `${link.lable} page link`})}
                            >{link.lable}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}