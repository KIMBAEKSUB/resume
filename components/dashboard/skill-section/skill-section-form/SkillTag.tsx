import { KeywordList } from "@/util/const/interface/dashboard";
import { useEffect, useState } from "react";


const SkillTag: React.FC<{item: KeywordList, onClick: (n: number) => void}> = ({item, onClick}) => {

    const [ className, setClassName ] = useState<string>();

    useEffect(() => {
        switch (item.conditionIndex) {
            case 0:
                setClassName("is-primary");
                break;
            case 1:
                setClassName("is-link");
                break;
            case 2:
                setClassName("is-danger");
                break;
            default:
                setClassName("is-warning");
                break;
        }

    } , [item]);


    return (
        <span className={`tag mr-2 mb-2 mt-2 ${className}`}>
            {item.keyword}
            <button className="delete is-small" onClick={onClick.bind(null, item.id)}></button>
        </span>
    );
}

export default SkillTag;