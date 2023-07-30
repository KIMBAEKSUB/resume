import { FaDocker, FaPhp, FaReact, FaNodeJs, FaAws, FaJava, FaVuejs } from 'react-icons/fa';
import { SiDotNet } from "@react-icons/all-files/si/SiDotNet";
import { SiPostgresql } from "@react-icons/all-files/si/SiPostgresql";
import classes from './Home.module.scss'

const HomeLanguages = () => {
    return <div className={classes.languageContainerWarp}>
    <div className={classes.languageContainer}>
        <div className={classes.language}>
            <FaDocker />
        </div>
        <div className={classes.language}>
            <FaPhp />
        </div>
        <div className={classes.language}>
            <FaReact />
        </div>
        <div className={classes.language}>
            <SiDotNet />
        </div>
        <div className={classes.language}>
            <FaJava />
        </div>
        <div className={classes.language}>
            <FaAws />
        </div>
        <div className={classes.language}>
            <FaNodeJs />
        </div>
        <div className={classes.language}>
            <SiPostgresql />
        </div>
    </div>
</div>
}

export default HomeLanguages;