import classes from './Home.module.scss'
import HomeLanguages from './HomeLanguages';
import { useState } from 'react';
import HomeTitle from './HomeTitle';
import AppContactModal from '@/util/ui/modal/ContactModal/AppContactModal';


const HomeBody = () => {
    
    const [showContactModal, setShowContactModal] = useState(false);

    return (
        <div className="hero-body">
            <div className='container'>
                <HomeLanguages />
                <HomeTitle />
                <p className={`subtitle ${classes.subtitle}`}>
                    Exploring the World of Coding, Problem-Solving, and Innovation. <br />
                    Here, I Showcase My Journey as a Skilled Software Engineer, <br />
                    and I&apos;m Excited to Share My Passion for Creating Clean, Efficient,  <br />
                    and Scalable Solutions That Power the Future of Technology.
                </p>
                <button className="button is-info is-rounded mr-5">View Project History</button>
                <button className="button is-ghost" onClick={() => setShowContactModal(true)}>Send E-mail</button>
            </div>
            <AppContactModal isActive={showContactModal} onClose={() => setShowContactModal(false)}/>
        </div>
    );
}

export default HomeBody;