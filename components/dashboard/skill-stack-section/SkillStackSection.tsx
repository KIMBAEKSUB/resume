import classes from "./SkillStackSection.module.scss";

const SkillStackSection = () => {
    return (
        <>
            <section className="section">
                <h1 className="title is-2 ">Skill Stacks</h1>
                <div className={"box " + classes.frontEnd} >
                    <div className="columns">
                        <div className="column">
                            <h1 className="title is-3"><span className="has-text-success">1. </span> Frontend</h1>
                            <h2 className="subtitle has-text-grey-light has-text-weight-medium" style={{paddingLeft: "2rem"}}>HTML, CSS, JS, TS <br /> SCSS, Vue2, Vue3, React, ReactNative, NextJs</h2>
                        </div>
                    </div>
                </div>
                <div className={"box " + classes.backEnd} >
                    <div className="columns">
                        <div className="column">
                            <h1 className="title is-3"><span className="has-text-info">2. </span> Backend</h1>
                            <h2 className="subtitle has-text-grey-light has-text-weight-medium"  style={{paddingLeft: "2rem"}}>PHP, JS, TS, C#, JAVA, Python <br /> Laravel, NodeJs, express, DotNetFramework, Spring</h2>
                        </div>
                    </div>
                </div>
                <div className={"box " + classes.database} >
                    <div className="columns">
                        <div className="column">
                            <h1 className="title is-3"><span className="has-text-link">3. </span>Database</h1>
                            <h2 className="subtitle has-text-grey-light has-text-weight-medium" style={{paddingLeft: "2rem"}}>PostgreSQL, MySql</h2>
                        </div>
                    </div>
                </div>
                <div className={"box " + classes.service} >
                    <div className="columns">
                        <div className="column">
                            <h1 className="title is-3"><span className="has-text-link-dark">4. </span>Service</h1>
                            <h2 className="subtitle has-text-grey-light has-text-weight-medium" style={{paddingLeft: "2rem"}}>AWS, Linux, Docker <br />Micro Architecture, ServerLess Architecture</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SkillStackSection;