import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';

export interface Education {
    title: string;
    targets: string[];
    trainingHours: number;
    trainersName: string;
    category: string;
    icon?: any;
    url?: string;
}

export interface EducationSectionItemProps {
    item: Education;
}

const EducationSectionItem: React.FC<EducationSectionItemProps> = ({ item }) => {

    return <div className="box p-5">
        <h2 className="title is-5 has-text-grey-darker">
            { item.title }
        </h2>
        <p className="subtitle is-7">
            <span className="has-text-grey-light has-text-weight-semibold pr-2">
                { item.targets.join(", ") }
            </span>
            <span className="has-text-grey-light has-text-weight-semibold pr-2">
                { item.trainingHours }h
            </span>
            <span className="has-text-grey-light has-text-weight-normal is-italic">
                { item.trainersName }
            </span>
            <a href={item.url} title='udemy link' className="is-size-7 has-text-grey-light px-2">
                { <RiCheckboxMultipleBlankLine /> }
            </a>
        </p>
    </div>
}

export default EducationSectionItem;