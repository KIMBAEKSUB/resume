import AppNavigation from "../navigation/AppNavigation";
import classes from "./AppHeader.module.scss"
const AppHeader: React.FC = () => {
    return (
        <header className={classes.headerContainer}>
            <AppNavigation />            
        </header>
    );
}
    


export default AppHeader;