import QualificationsProfile from "./qualifications-profile-section/QualificationsProfileSection";
import SkillSection from "./skill-section/SkillSection";

import classes from "./Dashboard.module.scss";
import SkillStackSection from "./skill-stack-section/SkillStackSection";
import FooterSection from "./footer-section/FooterSection";
import AppNavigation from "@/util/ui/layout/navigation/AppNavigation";
import AppFooter from "@/util/ui/layout/footer/AppFooter";

const Dashboard = () => {
    return (
        <div className={classes.dashboard}>
            <main className="container">

                {/* navigation for the dashboard. */}
                {/* <AppNavigation /> */}

                {/* skills overview. full screen */}
                <SkillSection />

                {/* educations and certifications overview. */}
                <QualificationsProfile />

                {/* skill stack overview. */}
                <SkillStackSection />

                {/* resume download and sending an email button. */}
                <FooterSection />

                <AppFooter />
            </main>
        </div>
    )
}

export default Dashboard;