import { NavigationItemProps } from "@/util/const/interface/ui";

const NavigationItem: React.FC<NavigationItemProps> = ({ text, className, href, target }) => {

    return (
        <a className={`navbar-item mx-2 ${className}`} target={target ?? '_self'} href={href}>
            {text}
        </a>
    );
}

export default NavigationItem;