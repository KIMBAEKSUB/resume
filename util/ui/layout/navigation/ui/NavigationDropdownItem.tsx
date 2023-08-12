import NavigationItem from "./NavigationItem";

const NavigationDropdownItem: React.FC = () => {

    return (<>
        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
                About
            </a>

            <div className="navbar-dropdown">
                <NavigationItem text="About me" />
                <hr className="navbar-divider" />
                <NavigationItem text="Qualifications" />
                <NavigationItem text="Work Experience" />
                <NavigationItem text="Resume Dawnload" />
                <hr className="navbar-divider" />
                <NavigationItem text="Portfolios" />
                <NavigationItem text="Blog" />
            </div>
        </div>
    </>);
}

export default NavigationDropdownItem;