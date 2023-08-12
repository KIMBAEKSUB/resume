export interface SkillSectionFormProps {
    onChange: (value: any) => void
}

export interface SkillSectionSelectProps {
    value: number;
    onChange: (value: number) => void
}

export interface SkillSectionInputProps {
    conditionIndex: number;
    onKeyUp: (keywordList: any) => void;
}

export interface KeywordList {
    id: number;
    keyword: string;
    conditionIndex: number;
}


export type SkillSectionListItem = {
    project: string;
    languages: string[];
    frameworks: string[];
    tools: string[];
    roles: string[];
}

export interface SkillSectionListProps {
    items: SkillSectionListItem[];
}
