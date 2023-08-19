import { useEffect, useState } from "react";
import SkillSectionSelect from "../skill-section-form/SkillSectionSelect";
import { KeywordList, SkillSectionInputProps } from "@/util/const/interface/dashboard";
import SkillTag from "../skill-section-form/SkillTag";

export interface SkillSectionFormPCProps {
    onChange: (value: Array<KeywordList>) => void;
}

const StillSectionFormPC: React.FC<SkillSectionFormPCProps> = ({ onChange }) => {

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
        <p className="is-size-4 has-text-weight-bold">
            Search projects for &quot;
            <SkillSectionInput 
                conditionIndex={conditionIndex}
                onKeyUp={onKeyUpHandler}
            />
            &quot; By
            <SkillSectionSelect
                value={conditionIndex}
                onChange={onChangeHandler}
            />
        </p>
        {keywordList && keywordList.map((item) => {
            return <SkillTag key={item.id} item={item} onClick={deleteKeywordHandler} />
        })}
    </>
}

const SkillSectionInput: React.FC<SkillSectionInputProps> = ({ conditionIndex, onKeyUp }) => {

    const [inputColor, setInputColor] = useState<string>('');
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
        switch (conditionIndex) {
            case 0:
                setInputColor("has-text-primary");
                break;
            case 1:
                setInputColor("has-text-link");
                break;
            case 2:
                setInputColor("has-text-danger");
                break;
            default:
                setInputColor("has-text-warning");
                break;
        }
    }, [conditionIndex]);

    return <>
        <input 
            type="text" 
            className={"is-size-4 has-text-weight-bold " + inputColor} 
            style={{ outline: "none", border: "none", borderBottom: "3px solid #f2f2f2f2" }} 
            value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyUp={onKeyUpHandler}
        />  
    </>
}

export default StillSectionFormPC;