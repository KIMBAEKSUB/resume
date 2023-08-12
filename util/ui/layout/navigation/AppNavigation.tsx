import NavigationItem from "./ui/NavigationItem";
import { useState } from "react";
import NavigationDropdownItem from "./ui/NavigationDropdownItem";
import NavigationLogo from "./ui/NavigationLogo";
import NavigationMobileMenuButton from "./ui/NavigationMobileMenuButton";
import { PATH } from "@/util/const/common/path";

const AppNavigation: React.FC = () => {

    const [ isActive, setIsActive ] = useState<string>("");

    const activeHandler = () => {
        setIsActive((currentValue) => currentValue === "is-active" ? "" : "is-active")
    }

    return <nav className="navbar container" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <NavigationLogo />
            <NavigationMobileMenuButton isActive={isActive} onClick={activeHandler} />
        </div>

        <div className={`navbar-menu ${isActive}`}>
            <div className="navbar-end">
                <NavigationItem href={PATH.DASHBOARD} text="Dashboard" className="has-text-weight-medium" />
                <NavigationItem text="Projects" />
                <NavigationDropdownItem />
            </div>
        </div>
    </nav>
}

export default AppNavigation;