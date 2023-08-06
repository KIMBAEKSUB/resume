import AppTextarea from "@/util/ui/form/AppTextarea"

const ContactModalMessageTextarea: React.FC<{ onChange: (v: string) => void }> = ({onChange}) => {
    return <AppTextarea 
        label="Message"
        placeholder="Message input"
        validation={{ type: 'string', option: { required: true, maxLength: 500}, showError: true }}
        onChange={onChange}
    />
}

export default ContactModalMessageTextarea;