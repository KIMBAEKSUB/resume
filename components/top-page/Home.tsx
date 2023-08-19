import classes from './Home.module.scss'
import HomeWave from './HomeWave';
import HomeNavigation from './HomeNavigation';
import HomeBody from './HomeBody';

const Home = () => {

    return (<>
        <section className={`hero is-fullheight has-background-info-light ${classes.homeContainer}`}>

            {/* A top page's wave icons */}
            <HomeWave />

            {/* A top page's navigation */}
            <HomeNavigation />

            {/* A top page's body */}
            <HomeBody />

        </section>
    </>)
}

export default Home;