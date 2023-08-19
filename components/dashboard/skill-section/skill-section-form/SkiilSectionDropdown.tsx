import { MdLanguage } from "@react-icons/all-files/md/MdLanguage"
import { FiFramer } from "@react-icons/all-files/fi/FiFramer"
import { FaTools } from "@react-icons/all-files/fa/FaTools"
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser"
import { SkillSectionSelectProps } from "@/util/const/interface/dashboard"

const SkiilSectionDropdown: React.FC<SkillSectionSelectProps> = ({ value, onChange }) => {

    return (
        <span className="dropdown">
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Click Me</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div className="dropdown-content">
                        <a href="#" className="dropdown-item">
                        Language
                        </a>
                        <a href="#" className="dropdown-item">
                        Tool
                        </a>
                        <a href="#" className="dropdown-item">
                        Framework
                        </a>
                        <a href="#" className="dropdown-item">
                        Role
                        </a>
                    </div>
                </div>
            </div>
            {/* <span className="icon is-large is-left">
                {value === 0 && <MdLanguage />}
                {value === 1 && <FaTools />}
                {value === 2 && <FiFramer />}
                {value === 3 && <FaRegUser />}
            </span> */}
        </span>
    )
}

export default SkiilSectionDropdown;

const styles = {
    selectInnerContainer: {

    },
    select: {

        border: 'none',
    },
}