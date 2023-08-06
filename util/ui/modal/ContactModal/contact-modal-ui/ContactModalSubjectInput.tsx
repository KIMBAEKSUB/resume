
import AppInput from "@/util/ui/form/AppInput";
import { MdTitle } from "@react-icons/all-files/md/MdTitle"
import React from "react";

const ContactModalSubjectInput: React.FC<{ onChange: (v: string) => void }> = ({onChange}) => {
    return <AppInput
        placeholder="Subject input"
        icon={<MdTitle />}
        validation={{ type: 'string', option: { required: true, maxLength: 50}, showError: true }}
        onChange={onChange}
    />
}

export default ContactModalSubjectInput;