import { SetStateAction, useCallback, useState } from "react";
import SkillSectionForm from "./skill-section-form/SkillSectionForm"
import SkillSectionList from "./skill-section-list/SkillSectionList";
import ImportedSkills from "@/util/const/TEMP_CONTEANT/skills";
import { KeywordList, SkillSectionListItem } from "@/util/const/interface/dashboard";
import DashboardTitle from "../ui/DashboardTitle";
import { PATH } from "@/util/const/common/path";
import classes from "./SkillSection.module.scss";


const SkillSection = () => {

    const [skills, setSkills] = useState<Array<SkillSectionListItem>>(ImportedSkills);

    const onChangeContionHandler = useCallback((keywords: KeywordList[]) => {
        if (keywords.length === 0) {
            setSkills(ImportedSkills);
            return;
        }

        let filteredSkills: SetStateAction<SkillSectionListItem[]> = [];
        keywords.forEach(element => {
            if (element.conditionIndex === 0) {
                filteredSkills = ImportedSkills.filter(item => {
                    return item.languages.some(language => language.toLowerCase() === element.keyword.toLowerCase());
                });
            }

            if (element.conditionIndex === 1) {
                filteredSkills = ImportedSkills.filter(item => {
                    return item.tools.some(tool => tool.toLowerCase() === element.keyword.toLowerCase());
                });
            }

            if (element.conditionIndex === 2) {
                filteredSkills = ImportedSkills.filter(item => {
                    return item.frameworks.some(framework => framework.toLowerCase() === element.keyword.toLowerCase());
                });
            }

            if (element.conditionIndex === 3) {
                filteredSkills = ImportedSkills.filter(item => {
                    return item.roles.some(role => role.toLowerCase() === element.keyword.toLowerCase());
                });
            }
        });

        setSkills(filteredSkills);
    }, []);

    return <section className="section" style={{ paddingTop: "5em" }}>
        <h1 className="title is-1">
            <span>
                Overview
            </span>
            {/* <a className="button is-ghost p-1 mx-2 has-text-weight-normal" style={{ height: "auto" }} href={""} target="_self">more</a> */}
        </h1>
        <h2 className="subtitle is-4"><strong className="has-text-danger">{ImportedSkills.length} Task</strong> involvements.</h2>
            <SkillSectionForm onChange={onChangeContionHandler} />

        <div className={"box " + classes.boxContainer}>

        </div>
<div className={"box " + classes.boxContainer}>

        </div>
        <div className={"box " + classes.boxContainer}>
            <SkillSectionList items={skills} />
        </div>
    </section>
}

export default SkillSection;