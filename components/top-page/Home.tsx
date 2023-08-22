import classes from './Home.module.scss'
import HomeWave from './HomeWave';
import HomeNavigation from './HomeNavigation';
import HomeBody from './HomeBody';
import Dashboard from '../dashboard/Dashboard';

const Home = () => {

    return (<>
        <section className={`hero ${classes.homeContainer}`}>

            {/* A top page's navigation */}
            <HomeNavigation />

            {/* A top page's body */}
            <HomeBody />

        </section>
            <Dashboard />
    </>)
}

export default Home;