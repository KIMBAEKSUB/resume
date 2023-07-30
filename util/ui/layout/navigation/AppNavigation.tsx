import Link from "next/link";
import NavigationItem from "./ui/NavigationItem";
import { useState } from "react";
import NavigationDropdownItem from "./ui/NavigationDropdownItem";
import mark from "@/public/images/logo/mark.png";
import Image from "next/image";

const AppNavigation: React.FC = () => {

    const [ isActive, setIsActive ] = useState<string>("");

    const activeHandler = () => {
        setIsActive((currentValue) => currentValue === "is-active" ? "" : "is-active")
    }

    return <nav className="navbar container my-1" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className="navbar-item title is-4 m-0" href="/">
                <Image className="mr-2" src={mark} alt="CodeVerseStudio" width={45} height={45} />
                CodeVerseStudio
            </Link>
            <a role="button" className={`navbar-burger ${isActive}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={activeHandler}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div className={`navbar-menu ${isActive}`}>
            <div className="navbar-end">
                <NavigationItem text="Dashboard" className="has-text-weight-medium" />
                <NavigationItem text="SkillSheet" />
                <NavigationItem text="Carees" />
                <NavigationItem text="Projects" />
            </div>
        </div>
    </nav>
}

export default AppNavigation;