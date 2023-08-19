import { PATH } from "@/util/const/common/path";
import classes from "./AboutTabs.module.scss";
import usePathHelper from "@/util/hooks/user-path";

export interface AboutTabItemProps {
    text: string;
    href: string;
    isActive: boolean;
}

const AboutTabItem: React.FC<AboutTabItemProps> = ({ isActive, text, href }) => {
    return <>
        <li className={classes.tab + " " + (isActive ? classes.isActive : "")}>
            <a className={"p-4 " + classes.tabItem} href={href}>
                {text}
            </a>
        </li>
    </>
}

const AboutTabs: React.FC = () => {

    const pathHelper = usePathHelper();

    return <div className={"tabs is-centered is-fullwidth " + classes.tabContainer}>
        <ul className={"container " + classes.tabInnerContainer}>
            <AboutTabItem 
                text="Project List" 
                href={PATH.PROJECTS} 
                isActive={pathHelper.isCurrentPath(PATH.PROJECTS)} 
            />
            <AboutTabItem 
                text="Qualifications" 
                href={PATH.QUALIFICATIONS} 
                isActive={pathHelper.isCurrentPath(PATH.QUALIFICATIONS)}
            />
            <AboutTabItem 
                text="Work Experience" 
                href={PATH.WORK_EXPERIENCE} 
                isActive={pathHelper.isCurrentPath(PATH.WORK_EXPERIENCE)}    
            />
            <AboutTabItem 
                text="Resume Download" 
                href={PATH.RESUME_DOWNLOAD} 
                isActive={pathHelper.isCurrentPath(PATH.RESUME_DOWNLOAD)}
            />
        </ul>
    </div>
}

export default AboutTabs;