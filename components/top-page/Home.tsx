import AppNavigation from '@/util/ui/layout/navigation/AppNavigation'
import classes from './Home.module.scss'

import HomeWave from './HomeWave';
import HomeLanguages from './HomeLanguages';
import AppNavigationFooter from '@/util/ui/layout/navigation/AppNavigationFooter';
import HomeTitle from './HomeTitle';

export default function Home() {

    return (
        <section className="hero is-large is-fullheight has-background-info-light" style={{position: "relative", overflow: "hidden"}}>
            <HomeWave />
            <div className={'hero-head has-background-white-bis ' + classes.navigationContainer}>
                <AppNavigation />
            </div>
            <div className="hero-body">
                <div className='container'>
                    <HomeLanguages />
                    <HomeTitle />
                    <p className={"subtitle " + classes.subtitle}>
                        Exploring the World of Coding, Problem-Solving, and Innovation. <br />
                        Here, I Showcase My Journey as a Skilled Software Engineer, <br />
                        and I&apos;m Excited to Share My Passion for Creating Clean, Efficient,  <br />
                        and Scalable Solutions That Power the Future of Technology.
                    </p>
                    <button className="button is-info is-rounded mr-5">View Project History</button>
                    <button className="button is-ghost">Send E-mail</button>
                </div>
            </div>
            <div className="hero-foot">
                <AppNavigationFooter />
            </div>
        </section>
    )
}
