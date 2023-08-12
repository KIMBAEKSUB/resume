import DashboardTitle from "../ui/DashboardTitle";

export const SkillStackTable = ({ item }) => {
    return <>
        <tr>
            <th rowSpan={item.count}>{item.category}</th>
            <td>{item.name}</td>
            <td>{item.framework}</td>
            <td>{item.careersPeriod} career</td>
            <td>{item.projectCount}</td>
        </tr>
    </>;
}

export const prontEndSkillStack = [
    {

    }
];

const SkillStackSection = () => {
    return (
        <>
            <section className="section">
                <DashboardTitle
                    title="Skill Stacks"
                    subtitle="Frontend, Backend, Databases, Cloud Services ...etc"
                />
                <div className="box">

                    <div style={{ overflow: "auto" }}>

                        <table className="table" style={{ width: "100%" }}>
                            <thead>
                                <tr>
                                    <th><abbr title="Category">Cg</abbr></th>
                                    <th>Ls</th>
                                    <th><abbr title="Played">Fw</abbr></th>
                                    <th><abbr title="Played">Cr</abbr></th>
                                    <th><abbr title="Played">Pc</abbr></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th rowSpan={3}>Frontend</th>
                                    <td>Javascript</td>
                                    <td>
                                        Vue<br />
                                        React <br />
                                        React Native <br />
                                        Next.js
                                    </td>
                                    <td>4-year career</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Css</td>
                                    <td>
                                        bootstrap <br />
                                        Bulma
                                    </td>
                                    <td>4-year career</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Html</td>
                                    <td></td>
                                    <td>4-year career</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <th rowSpan={5}>Backend</th>
                                    <td>PHP</td>
                                    <td>Laravel</td>
                                    <td>4-year career</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>
                                        Javascript <br />
                                        Typescript</td>
                                    <td>
                                        Node.Js <br />
                                        Express <br />
                                        Next.Js
                                    </td>
                                    <td>4-year career</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>C#</td>
                                    <td>.NetFramework</td>
                                    <td>4-year career</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>JAVA</td>
                                    <td>Spring</td>
                                    <td>1-year career</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Docker</td>
                                    <td></td>
                                    <td>1-year career</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <th rowSpan={2}>Database</th>
                                    <td>PostgreSql</td>
                                    <td></td>
                                    <td>4-year career</td>
                                    <td>14</td>
                                </tr>
                                <tr>
                                    <td>MySql</td>
                                    <td></td>
                                    <td>4-year career</td>
                                    <td>14</td>
                                </tr>
                                <tr>
                                    <th rowSpan={4}>Cloud Service</th>
                                    <td>AWS</td>
                                    <td></td>
                                    <td>4-year career</td>
                                    <td>14</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SkillStackSection;