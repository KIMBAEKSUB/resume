import ReactDOM from "react-dom";
import { NextPage } from "next";
import classes from "./AppBackdrop.module.scss";

interface IAppBackdropType {
    onClick?: () => void;
    darkness?: boolean;
}

const AppBackdrop: NextPage<IAppBackdropType> = (props) => {
    const backdropStyle = classes.backdrop + " " + (props.darkness && classes.backdrop__background_darkness);
    return <>
        {ReactDOM.createPortal(<div className={backdropStyle} onClick={props.onClick}></div>, document.getElementById("backdrop-root")!)}
    </>
};

export default AppBackdrop;