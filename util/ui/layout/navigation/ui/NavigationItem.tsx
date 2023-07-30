import { NavigationItemProps } from "@/util/const/interface/UiInterface";

const NavigationItem: React.FC<NavigationItemProps> = ({ text, className, href, target }) => {

    return (
        <a className={`navbar-item ${className}`} target={target ?? '_blank'} href={href}>
            {text}
        </a>
    );
}

export default NavigationItem;