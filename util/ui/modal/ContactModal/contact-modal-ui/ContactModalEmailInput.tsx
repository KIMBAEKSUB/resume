import AppInput from "@/util/ui/form/AppInput";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";

const ContactModalEmailInput: React.FC<{ onChange: (v: string) => void }> = ({onChange}) => {
    return <AppInput
        label="Email"
        type="email"
        placeholder="Email input"
        icon={<MdEmail />}
        validation={{ type: 'email', showError: true }}
        onChange={onChange}
    />
}

export default ContactModalEmailInput;