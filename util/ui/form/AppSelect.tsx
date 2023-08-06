export interface AppSelectOption {
    value: string | number;
    text: string;
}

export interface AppSelectProps {
    label?: string;
    onChange: (value: number ) => void;
    error?: string;
    options: Array<AppSelectOption>;
}

const AppSelect: React.FC<AppSelectProps> = ({ label, onChange, options }) => {
    
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <div className="select" style={{ width: "100%"}}>
                    <select onChange={(e) => onChange(+e.currentTarget.value)} style={{ width: "100%"}}>
                        {options.map(v => <option key={v.value} value={v.value}>{v.text}</option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default AppSelect