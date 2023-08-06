import React from "react";

const NavigationMobileMenuButton: React.FC<{isActive: string, onClick: () => void}> = ({isActive, onClick: activeHandler}) => {

    return <a role="button" className={`navbar-burger ${isActive}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={activeHandler}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>

}

export default NavigationMobileMenuButton;