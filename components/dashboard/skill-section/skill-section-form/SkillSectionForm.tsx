import React, { useEffect, useState } from "react";
import SkillSectionInput from "./SkillSectionInput"
import SkillSectionSelect from "./SkillSectionSelect"
import SkillTag from "./SkillTag";
import useWindowSize from "@/util/hooks/use-window-size";
import classes from "./SkillSection.module.scss";
import { KeywordList, SkillSectionFormProps } from "@/util/const/interface/dashboard";


const SkillSectionForm: React.FC<SkillSectionFormProps> = ({ onChange }) => {

    const { isMobile } = useWindowSize();
    const [ conditionIndex, setConditionIndex ] = useState(0);
    const [ keywordList, setKeywordList ] = useState<Array<KeywordList>>();

    const onChangeHandler = (value: number) => {
        setConditionIndex(value);
    };

    const onKeyUpHandler = (keyword: string) => {
        setKeywordList(keywordList => {

            if (!keywordList) {
                keywordList = [];
            }

            return [
                ...keywordList,
                {id: Math.random(), keyword, conditionIndex},
            ]
        });
    }

    const deleteKeywordHandler = (id: number) => {
        setKeywordList(keywordList => {
            return keywordList?.filter(item => item.id !== id);
        });
    }

    useEffect(() => {
        if (!keywordList) {
            return;
        }
        onChange(keywordList);
    }, [keywordList, onChange]);

    return <>
        <div className={classes.formContainer} style={styles.form}>
            {isMobile && <>
                <SkillSectionSelect 
                    value={conditionIndex}
                    onChange={onChangeHandler} 
                />
                <SkillSectionInput 
                    conditionIndex={conditionIndex} 
                    onKeyUp={onKeyUpHandler}
                />
            </>}
            {!isMobile && <>
                <SkillSectionInput 
                    conditionIndex={conditionIndex} 
                    onKeyUp={onKeyUpHandler}
                    />
                <SkillSectionSelect 
                    value={conditionIndex}
                    onChange={onChangeHandler} 
                    />
            </>}
        </div>
        {keywordList && keywordList.map((item) => {
            return <SkillTag key={item.id} item={item} onClick={deleteKeywordHandler} />
        })}
    </>
}

export default SkillSectionForm;

const styles = {
    form: {
        display: 'flex',
        width: '100% !important',
    },
}
