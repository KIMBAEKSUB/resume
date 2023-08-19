import useWindowSize from "@/util/hooks/use-window-size";
import { FaAws } from "react-icons/fa";

export interface Certification {
    title: string;
    date: string;
    score: string;
    category: string;
    icon?: any;
}

export interface CertificationSectionItemProps {
    item: Certification;
}

const CertificationSectionItem: React.FC<CertificationSectionItemProps> = ({ item }) => {

    const { isMobile } = useWindowSize();

    if (item.category === "AWS") {
        item.icon = <FaAws className="is-size-1 has-text-grey-dark" />
    }

    return <div className="box">
        <div className="columns">
            <div className="column is-four-fifths" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2 className="title is-5 has-text-grey-darker">{ item.title }</h2>
                <p className="subtitle is-7 ">
                    <span className="has-text-grey-light has-text-weight-semibold pr-2">
                        { item.score }
                    </span>
                    <span className="has-text-grey-light has-text-weight-normal is-italic">
                        { item.date }
                    </span>
                </p>
            </div>
            { !isMobile && <div className="column is-one-fifth is-flex is-flex-direction-column is-justify-content-center is-align-items-center">{ item.icon }</div>}
        </div>
    </div>
}

export default CertificationSectionItem;