import Image from 'next/image';
import wave1 from '@/public/images/wave/wave-1.svg';
import wave2 from '@/public/images/wave/wave-2.svg';
import wave3 from '@/public/images/wave/wave-3.svg';
import classes from './Home.module.scss'

const HomeWave = () => {
    return (
        <>
            <div className={classes.wave1}>
                <Image src={wave1} alt="wave" />
            </div>
            <div className={classes.wave3}>
                <Image src={wave3} alt="wave" className={classes.wave3} />
            </div>
            <div className={classes.wave2}>
                <Image src={wave2} alt="wave" className={classes.wave2} />
            </div>
        </>
    );
}

export default HomeWave


