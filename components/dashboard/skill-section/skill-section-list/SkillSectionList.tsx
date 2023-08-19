import { SkillSectionListProps } from "@/util/const/interface/dashboard";
import classes from "./SkillSectionList.module.scss";

const _SkillSectionList: React.FC<SkillSectionListProps> = ({ items }) => {
    
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
        <table className="table" style={{width: "100%", minWidth: "1100px", background: "none"}}>
            <thead>
                <tr>
                    <th className="has-text-grey" ><abbr title="A project identity number">No</abbr></th>
                    <th className="has-text-grey" style={{ width: "600px" }}>Pj</th>
                    <th className="has-text-grey" ><abbr title="Requirement Definition">Rd</abbr></th>
                    <th className="has-text-grey" ><abbr title="Basic Design">Bd</abbr></th>
                    <th className="has-text-grey" ><abbr title="Detailed Design">Dd</abbr></th>
                    <th className="has-text-grey" ><abbr title="Development">Dv</abbr></th>
                    <th className="has-text-grey" ><abbr title="Integration Test">It</abbr></th>
                    <th className="has-text-grey" ><abbr title="System Test">St</abbr></th>
                    <th className="has-text-grey" ><abbr title="Operation">Op</abbr></th>
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tableRow}>
                    <td className="is-size-6">1</td>
                    <td className="is-size-6">
                        <span className="">Operation of a Paperless Payment Service</span> <br />
                        <span className="has-text-grey-light is-size-6">2023-08-12 ~ 2023-08-12</span>
                    </td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                </tr>
                <tr className={classes.tableRow}>
                    <td className="is-size-6">2</td>
                    <td className="is-size-6">
                        <span className="">Testings of a User Portal</span> <br />
                        <span className="has-text-grey-light is-size-6">7 days</span>
                    </td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                </tr>
                <tr className={classes.tableRow}>
                    <td className="is-size-6">3</td>
                    <td className="is-size-6">
                        <span className="">Operation of a Paperless Payment Service</span> <br />
                        <span className="has-text-grey-light is-size-6">2023-08-12 ~ 2023-08-12</span>
                    </td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                </tr>
                <tr className={classes.tableRow}>
                    <td className="is-size-6">3</td>
                    <td className="is-size-6">
                        <span className="">Operation of a Paperless Payment Service</span> <br />
                        <span className="has-text-grey-light is-size-6">2023-08-12 ~ 2023-08-12</span>
                    </td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                </tr>
                <tr className={classes.tableRow}>
                    <td className="is-size-6">3</td>
                    <td className="is-size-6">
                        <span className="">Operation of a Paperless Payment Service</span> <br />
                        <span className="has-text-grey-light is-size-6">2023-08-12 ~ 2023-08-12</span>
                    </td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                </tr>
                <tr className={classes.tableRow}>
                    <td className="is-size-6">3</td>
                    <td className="is-size-6">
                        <span className="">Operation of a Paperless Payment Service</span> <br />
                        <span className="has-text-grey-light is-size-6">2023-08-12 ~ 2023-08-12</span>
                    </td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                </tr>
                <tr className={classes.tableRow}>
                    <td className="is-size-6">3</td>
                    <td className="is-size-6">
                        <span className="">Operation of a Paperless Payment Service</span> <br />
                        <span className="has-text-grey-light is-size-6">2023-08-12 ~ 2023-08-12</span>
                    </td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                </tr>
                <tr className={classes.tableRow}>
                    <td className="is-size-6">3</td>
                    <td className="is-size-6">
                        <span className="">Operation of a Paperless Payment Service</span> <br />
                        <span className="has-text-grey-light is-size-6">2023-08-12 ~ 2023-08-12</span>
                    </td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                </tr>
                <tr className={classes.tableRow}>
                    <td className="is-size-6">3</td>
                    <td className="is-size-6">
                        <span className="">Operation of a Paperless Payment Service</span> <br />
                        <span className="has-text-grey-light is-size-6">2023-08-12 ~ 2023-08-12</span>
                    </td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                    <td className="is-size-6"></td>
                </tr>
            </tbody>
        </table>
    </div>
}


export default SkillSectionList;