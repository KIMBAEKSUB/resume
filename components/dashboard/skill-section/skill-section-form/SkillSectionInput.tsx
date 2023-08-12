import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt"
import classes from "./SkillSection.module.scss"
import React, { useEffect, useState } from "react";
import { SkillSectionInputProps } from "@/util/const/interface/dashboard";

const SkillSectionInput: React.FC<SkillSectionInputProps> = ({ conditionIndex, onKeyUp }) => {

    const [placeholder, setPlaceholder] = useState<string>('PHP, JAVA, JavaScript, TypeScript, C#, SQL, HTML, CSS ...etc');
    const [keyword, setKeyword] = useState<string>('');

    const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') {
            return;
        }

        if (!keyword) {
            return;
        }
        onKeyUp(keyword);
        setKeyword('');
    }

    useEffect(() => {        
        if (conditionIndex === 0) {
            setPlaceholder('PHP, JAVA, JavaScript, TypeScript, C#, SQL, HTML, CSS ...etc');
        } else if (conditionIndex === 1) {
            setPlaceholder('AWS, Docker ...etc');
        } else if (conditionIndex === 2) {
            setPlaceholder('NextJS, React, Vue2, Vue3, NodeJS, Laravel, .NetFrameWork ...etc');
        } else if (conditionIndex === 3) {
            setPlaceholder('FrontEnd, BackEnd, FullStack, Design, Manegemant, Operating ...etc');
        }
    }, [conditionIndex]);

    return <div className={"control has-icons-left has-icons-right " + classes.inputContainer} style={styles.inputContainer} >
        <input className="input" type="text" placeholder={placeholder} value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyUp={onKeyUpHandler}/>
        <span className="icon is-small is-left">
            <BiSearchAlt />
        </span>
    </div>
}

export default SkillSectionInput;

const styles = {
    inputContainer: {
        flex: '1',
        marginRight: '3rem',
    },
}