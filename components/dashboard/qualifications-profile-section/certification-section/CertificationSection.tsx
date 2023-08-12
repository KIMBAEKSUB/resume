import certifications from "@/util/const/TEMP_CONTEANT/certifications";
import CertificationSectionItem from "./CertificationSectionItem";
import DashboardTitle from "../../ui/DashboardTitle";

const CertificationSection = () => {
    return (
        <div className="column is-half">
            <div className="section">
                <DashboardTitle
                    title="Certifications"
                    subtitle={<><strong style={{ color: "#00CBA9"  }}>4 AWS</strong>  Certications and <strong style={{ color: "#00CBA9"  }}>2 Linux</strong> Certications.</>}
                    href="/projects"
                />
                {certifications.map(item => <CertificationSectionItem key={Math.random()} item={item} />)}
            </div>
        </div>
    );
}

export default CertificationSection;