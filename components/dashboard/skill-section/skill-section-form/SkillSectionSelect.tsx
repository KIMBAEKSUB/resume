import { MdLanguage } from "@react-icons/all-files/md/MdLanguage"
import { FiFramer } from "@react-icons/all-files/fi/FiFramer"
import { FaTools } from "@react-icons/all-files/fa/FaTools"
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser"
import { SkillSectionSelectProps } from "@/util/const/interface/dashboard"

const SkillSectionSelect: React.FC<SkillSectionSelectProps> = ({ value, onChange }) => {

    return (
        <div className="control has-icons-left">
            <div className="select" style={styles.selectInnerContainer}>
                <select onChange={(e) => onChange(+e.target.value)} style={styles.select}>
                    <option value={0}>Language</option>
                    <option value={1}>Tool</option>
                    <option value={2}>Framework</option>
                    <option value={3}>Role</option>
                </select>
            </div>
            <span className="icon is-large is-left">
                {value === 0 && <MdLanguage />}
                {value === 1 && <FaTools />}
                {value === 2 && <FiFramer />}
                {value === 3 && <FaRegUser />}
            </span>
        </div>
    )
}

export default SkillSectionSelect;

const styles = {
    selectInnerContainer: {
        width: '100%',
    },
    select: {
        width: '100%',
        border: 'none',
    },
}