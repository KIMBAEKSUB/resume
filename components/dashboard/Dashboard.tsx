import QualificationsProfile from "./qualifications-profile-section/QualificationsProfileSection";
import SkillSection from "./skill-section/SkillSection";

import classes from "./Dashboard.module.scss";
import SkillStackSection from "./skill-stack-section/SkillStackSection";
import FooterSection from "./footer-section/FooterSection";

const Dashboard = () => {
    return (
        <div className={classes.dashboard}>
            <main className="container">

                {/* skills overview. full screen */}
                <SkillSection />

                {/* educations and certifications overview. */}
                <QualificationsProfile />

                {/* skill stack overview. */}
                <SkillStackSection />

                {/* resume dawnload and sending an email button. */}
                <FooterSection />
            </main>
        </div>
    )
}

export default Dashboard;