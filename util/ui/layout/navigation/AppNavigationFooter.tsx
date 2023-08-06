import { useState } from "react";
import AppContactModal from "../../modal/ContactModal/AppContactModal"
import { PATH } from "@/util/const/common/path";
import Link from "next/link";

const AppNavigationFooter = () => {

    const [showContactModal, setShowContactModal] = useState(false);

    return <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
            <ul>
                <li><Link href={PATH.HOME}>Home</Link></li>
                <li><a onClick={() => setShowContactModal(true)}>Contact</a></li>
                <li><a>About Me</a></li>
                <li><a>Download Resume</a></li>
            </ul>
        </div>
        <AppContactModal isActive={showContactModal} onClose={() => setShowContactModal(false)}/>
    </nav>
}

export default AppNavigationFooter