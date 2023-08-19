import certifications from "@/util/const/STATIC/certifications";
import CertificationSectionItem from "./CertificationSectionItem";

const CertificationSection = () => {
    return (
        <div className="column is-half">
            <div className="section">
                <h1 className="title is-2">
                    <span>
                        Certifications
                    </span>
                    {/* <a className="button is-ghost p-1 mx-2 has-text-weight-normal" style={{ height: "auto" }} target="_self">more</a> */}
                </h1>
                <h2 className="subtitle"><strong style={{ color: "#00CBA9" }}>4 AWS</strong>  Certifications and <strong style={{ color: "#00CBA9" }}>2 Linux</strong> Certifications.</h2>
                {certifications.map(item => <CertificationSectionItem key={Math.random()} item={item} />)}
            </div>
        </div>
    );
}

export default CertificationSection;