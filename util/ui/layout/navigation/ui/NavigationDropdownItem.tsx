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
                <NavigationItem text="Project" />
                <NavigationItem text="Blog" />
                <NavigationItem text="Resume" />
            </div>
        </div>
    </>);
}

export default NavigationDropdownItem;