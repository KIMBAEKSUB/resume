import { POSITION, POSITION_NAMES } from "@/util/const/common/position";
import classes from "./ProjectItem.module.scss";
import { BsCheck } from "react-icons/bs";

export interface AboutProjectItemProps {
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    langs: string[];
    rolesNumber: number;
}

const PositionItem: React.FC<{ rollNumber: number }> = ({ rollNumber }) => {
    return <div className={classes.position}><BsCheck className={classes.checkIcon} />
        {POSITION_NAMES[rollNumber]}
    </div>
}

const ProjectItem: React.FC<AboutProjectItemProps> = ({ title, startDate, endDate, description, langs, rolesNumber }) => {
    return <>
        <div className="box p-5">
            <div className="columns p-3">
                <div className="column is-one-third">
                    <h3 className="title is-4">{title}</h3>
                    <p className="subtitle is-6 has-text-weight-bold">{startDate} - {endDate}</p>
                    <p className="content is-6" color="#232A55">
                        {description}
                    </p>
                    <div className="tags">
                        {langs?.map(lang => {
                            return <span key={Math.random()} className="tag">{lang}</span>
                        })}
                    </div>
                </div>
                <div className="column">
                    <div className={classes.positionContainer}>
                        <div className={classes.positionInnerContainer}>
                            {rolesNumber & POSITION.RequirementAnalysis ? <PositionItem rollNumber={POSITION.RequirementAnalysis} /> : "" }
                            {rolesNumber & POSITION.RequirementDefinition ? <PositionItem rollNumber={POSITION.RequirementDefinition} /> : "" }
                            {rolesNumber & POSITION.BasicOrPreliminaryDesign ? <PositionItem rollNumber={POSITION.BasicOrPreliminaryDesign} /> : "" }
                            {rolesNumber & POSITION.DetailedDesign ? <PositionItem rollNumber={POSITION.DetailedDesign} /> : "" }
                        </div>
                        <div className={classes.positionInnerContainer}>
                            {rolesNumber & POSITION.Implementation ? <PositionItem rollNumber={POSITION.Implementation} /> : "" }
                            {rolesNumber & POSITION.ComprehensiveTest ? <PositionItem rollNumber={POSITION.ComprehensiveTest} /> : "" }
                            {rolesNumber & POSITION.Maintenance ? <PositionItem rollNumber={POSITION.Maintenance} /> : "" }
                            {rolesNumber & POSITION.Operation ? <PositionItem rollNumber={POSITION.Operation} /> : "" }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProjectItem;