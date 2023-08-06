import Link from "next/link";
import mark from "@/public/images/logo/mark.png";
import Image from "next/image";

const NavigationLogo: React.FC = () => {

    return <Link className="navbar-item title is-4 m-0" href="/">
        <Image className="mr-2" src={mark} alt="CodeVerseStudio" width={45} height={45} />
        CodeVerseStudio
    </Link>
}

export default NavigationLogo;