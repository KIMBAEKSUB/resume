import { SetStateAction, useCallback, useEffect, useState } from "react";
import ImportedSkills from "@/util/const/STATIC/skills";
import { KeywordList, SkillSectionListItem } from "@/util/const/interface/dashboard";
import classes from "./SkillSection.module.scss";
import useWindowSize from "@/util/hooks/use-window-size";
import StillSectionFormPC from "./skill-section-form-pc/SkillSectionFormPC";
import SkillSectionList from "./skill-section-list/SkillSectionList";

const SkillSection = () => {

    const [skills, setSkills] = useState<Array<SkillSectionListItem>>(ImportedSkills);
    const { isMobile } = useWindowSize();
    const [styles, setStyles] = useState({ title: "is-1" });

    useEffect(() => {
        if (isMobile) {
            setStyles({ title: "is-2" });
        } else {
            setStyles({ title: "is-1" });
        }
    }, [isMobile]);

    const onChangeConditionHandler = useCallback((keywords: KeywordList[]) => {
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

    return <section className={"section " + classes.sectionContainer}>
        <h1 className={"title " + styles.title}>Overview</h1>
        <h2 className="subtitle is-4">Please look around to see what I can do for you.</h2>
        <div className="box">
            <StillSectionFormPC onChange={onChangeConditionHandler} />
            <SkillSectionList items={skills} />

        </div>
    </section>
}

export default SkillSection;