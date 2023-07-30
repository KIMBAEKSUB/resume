import NavigationItem from "./NavigationItem";

const NavigationDropdownItem: React.FC = () => {

    return (<>
        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
                Portpolio
            </a>

            <div className="navbar-dropdown">
                <NavigationItem text="Kolea" />
            </div>
        </div>
    </>);
}

export default NavigationDropdownItem;