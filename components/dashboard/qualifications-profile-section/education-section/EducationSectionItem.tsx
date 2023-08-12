import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';


export interface Education {
    title: string;
    targers: string[];
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

    return <div className="box">
        <div className="columns">
            <div className="column is-four-fifths" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2 className="title is-6">
                    { item.title }
                    <a href={item.url} title='udemy link' className="is-size-7 has-text-grey-light px-2">
                        { <RiCheckboxMultipleBlankLine /> }
                    </a>
                </h2>
                <p className="subtitle is-7">
                    <span className="has-text-grey has-text-weight-semibold pr-2">
                        { item.targers.join(", ") }
                    </span>
                    <span className="has-text-grey has-text-weight-semibold pr-2">
                        { item.trainingHours }h
                    </span>
                    <span className="has-text-grey has-text-weight-normal is-italic">
                        { item.trainersName }
                    </span>
                </p>
            </div>
        </div>
    </div>
}

export default EducationSectionItem;