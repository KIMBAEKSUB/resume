import AppModal from "../AppModal"
import { useState } from "react";
import ContactModalEmailInput from "./contact-modal-ui/ContactModalEmailInput";
import ContactModalSubjectSelect from "./contact-modal-ui/ContactModalSubjectSelect";
import ContactModalSubjectInput from "./contact-modal-ui/ContactModalSubjectInput";
import ContactModalMessageTextarea from "./contact-modal-ui/ContactModalMessageTextarea";
import appFormEventBus from "../../form/AppFormEventBus";
import { IResult, RESULT } from "@/util/const/common/result";
import useHttp from "@/util/hooks/use-http";
import { API_PATH } from "@/util/const/common/path";

export interface AppContactModalProps {
    isActive: boolean;
    onClose: () => void;
}

const AppContactModal: React.FC<AppContactModalProps> = ({isActive, onClose}) => {

    const [result, setResult] = useState<IResult>(RESULT.DEFAULT);
    const { isLoading, http } = useHttp();

    const [emailAddress, setEmailAddress] = useState<string>('');
    const [subjectIndex, setSubjectIndex] = useState<number>(0);
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    /**
     * send email to the server
     */
    const onClickHandler = async () => {

        if (!emailAddress || !message || (subjectIndex == 1 && !subject )) {
            appFormEventBus.emit('validateInput', { type: 'email', showError: true });
            appFormEventBus.emit('validateTextarea', { type: 'string', option: { required: true }, showError: true });
            return;
        }
        
        const res = await http.post(API_PATH.EMAIL, {
            to: emailAddress,
            title: subjectIndex === 1 ? subject : 'Contact Me',
            message,
        });

        if (res.isError) {
            setResult(RESULT.ERROR_DEFAULT);
            return;
        }        

        setResult(RESULT.SUCCESS_DEFAULT);
    }

    /**
     * close the modal and reset the state
     */
    const closeModal = () => {
        setResult(RESULT.DEFAULT);
        onClose();
    }

    /**
     * when some errors are detected, show the error modal
     */
    if (result.isError) {
        return <>
            <AppModal 
                title="Opps! &#128166;" 
                subtitle="Sorry, something went wrong. Please try again later. "
                body={<>
                    An error occurred while seding an email.  <br />
                    Please try again later or contact me via the following email:  <br />
                    (Email: edin.code.02@gmail.com)
                </>} 
                buttonText="Close"
                isActive={isActive}
                onClick={closeModal}
                onClose={closeModal}
            />
        </>
    }

    /**
     * when the email is sent successfully, show the success modal
     */
    if (result.isSuccess) {
        return <>
            <AppModal 
                title="success! &#128232;" 
                subtitle="Your query has been sent!"
                body={<>
                    Thank you for your query. I will get back to you as soon as possible.
                </>} 
                buttonText="Close"
                isActive={isActive}
                onClick={closeModal}
                onClose={closeModal}
            />
        </>
    }

    return <>
        <AppModal 
            title="Contact Me &#128075;" 
            subtitle={<>Hi! I&apos;m Kim, a full stack web developer. <br /> If you have any questions, comments, or just want to say hi, feel free to contact me.</>}
            body={<>
                <ContactModalEmailInput onChange={(v: string) => setEmailAddress(v)} />
                <ContactModalSubjectSelect onChange={(e: number) => setSubjectIndex(e)} />
                {subjectIndex === 1 && <ContactModalSubjectInput onChange={(e: string) => setSubject(e)} />}
                <ContactModalMessageTextarea onChange={(e: string) => setMessage(e)} />
            </>} 
            buttonText="Send Email"
            secondaryButtonText="Close"
            isActive={isActive}
            isLoading={isLoading}
            onClick={onClickHandler}
            onClose={closeModal}
        />
    </>
}

export default AppContactModal