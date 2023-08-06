
import AppSelect from "@/util/ui/form/AppSelect";
import React from "react";

const ContactModalSubjectSelect: React.FC<{ onChange: (v: number) => void }> = ({ onChange }) => {
    return <AppSelect
        label="Subject"
        options={[
            { value: 0, text: "We are contacting you to offer a job." },
            { value: 1, text: "manual input" },
        ]}
        onChange={onChange}
    />
}

export default ContactModalSubjectSelect;