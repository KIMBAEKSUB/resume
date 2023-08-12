import DashboardTitle from "../../ui/DashboardTitle";
import EducationSectionItem from "./EducationSectionItem";
import educations from "@/util/const/TEMP_CONTEANT/educations";
import classes from "./EducationSection.module.scss";

const EducationSection = () => {

    const educationsCount = educations.length;
    const educationsHours = educations.reduce((acc, curr) => acc + curr.trainingHours, 0);

    return (
        <div className="column is-half">
            <div className="section">
                <h1 className="title is-2">
                    <span style={{ paddingBottom: "0.23rem", borderBottom: "4px solid #FFDE71" }}>Education</span>
                </h1>
                <h2 className="subtitle" style={{ marginTop: "-0.5rem" }}><><strong>{educationsCount}</strong> training sessions and <strong>{educationsHours}</strong> educational hours.</></h2>
                <div className={"pr-3 " + classes.itemContainer}>
                    {educations.map((education, index) => (<EducationSectionItem key={index} item={education} />))}
                </div>
            </div>
        </div>
    );
}

export default EducationSection;