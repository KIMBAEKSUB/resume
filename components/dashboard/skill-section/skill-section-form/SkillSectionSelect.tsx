import { SkillSectionSelectProps } from "@/util/const/interface/dashboard"

const SkillSectionSelect: React.FC<SkillSectionSelectProps> = ({ value, onChange }) => {

    return (
        <span className="control">
            <div className="select mx-3">
                <select onChange={(e) => onChange(+e.target.value)} style={{ border: "none" }}>
                    <option value={0}>Language</option>
                    <option value={1}>Tool</option>
                    <option value={2}>Framework</option>
                    <option value={3}>Role</option>
                </select>
            </div>
        </span>
    )
}

export default SkillSectionSelect;