import { SkillSectionListProps } from "@/util/const/interface/dashboard";
import classes from "./SkillSectionList.module.scss";

const SkillSectionList: React.FC<SkillSectionListProps> = ({ items }) => {
    
    const skills = items.map((item, index) => {
        return <tr className={classes.tableRow} key={index} style={{height: "56px"}}>
            <th>{index + 1}</th>
            <td>{item.project}</td>
            <td>{item.languages.join(", ")}</td>
            <td>{item.frameworks.join(", ")}</td>
            <td>{item.tools.join(", ")}</td>
            <td>{item.roles.join(", ")}</td>
        </tr>
    });

    return <div className="my-5" style={{maxHeight: "30rem", overflow: "auto"}}>
        <table className="table" style={{width: "100%", background: "none"}}>
            <thead>
                <tr>
                    <th><abbr title="A project identity number">NO</abbr></th>
                    <th>PJ</th>
                    <th><abbr title="PHP, JAVA, JavaScript, TypeScript, C#, PostgreSql, AppsScript, Css, Scss, Html">LG</abbr></th>
                    <th><abbr title="Laravel, React, NextJS, Vue, .NetFramework, Spring, NodeJS">FW</abbr></th>
                    <th><abbr title="AWS, Docker, FineReport">TL</abbr></th>
                    <th><abbr title="Requirement Definition, Basic Design, Detailed Design, Development, Integration Test, System Test, Operation">RL</abbr></th>
                </tr>
            </thead>
            <tbody>
                {skills}
            </tbody>
        </table>
    </div>
}

export default SkillSectionList;