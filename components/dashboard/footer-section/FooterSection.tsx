import ContactModalEmailInput from "@/util/ui/modal/ContactModal/contact-modal-ui/ContactModalEmailInput";
import ContactModalMessageTextarea from "@/util/ui/modal/ContactModal/contact-modal-ui/ContactModalMessageTextarea";
import ContactModalSubjectInput from "@/util/ui/modal/ContactModal/contact-modal-ui/ContactModalSubjectInput";
import ContactModalSubjectSelect from "@/util/ui/modal/ContactModal/contact-modal-ui/ContactModalSubjectSelect";
import { useState } from "react";

const FooterSection = () => {

    const [emailAddress, setEmailAddress] = useState();
    const [subjectIndex, setSubjectIndex] = useState(0);
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();


    return (
        <>
            <section className="section">
                <h3 className="subtitle has-text-centered has-text-primary is-uppercase is-size-6 has-text-weight-semibold my-6">feel free to contact me</h3>
                <h1 className="title is-2 is-spaced has-text-centered">Building Better Software, Together.</h1>
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <ContactModalEmailInput onChange={(v: string) => setEmailAddress(v)} />
                        <ContactModalSubjectSelect onChange={(e: number) => setSubjectIndex(e)} />
                        {subjectIndex === 1 && <ContactModalSubjectInput onChange={(e: string) => setSubject(e)} />}
                        <ContactModalMessageTextarea onChange={(e: string) => setMessage(e)} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-8 is-offset-2 has-text-right">
                        <button className="button is-info is-rounded">Rounded</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterSection;