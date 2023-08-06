import AppNavigation from '@/util/ui/layout/navigation/AppNavigation'
import classes from './Home.module.scss'

const HomeNavigation = () => {
    return (
        <div className={`hero-head has-background-white-bis ${classes.navigationContainer}`}>
            <AppNavigation />
        </div>
    );
}

export default HomeNavigation;