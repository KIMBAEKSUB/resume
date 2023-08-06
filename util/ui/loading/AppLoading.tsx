
import { NextPage } from "next";
import classes from "./AppLoading.module.scss";
import Image from "next/image";


const AppLoading: NextPage<{ overplay?: boolean }> = (props) => {
    return (
        <div className={`${classes.loading__wrap} ${props.overplay && classes.loading__overplay}`}>
            <div className="loader is-loading"></div>
        </div>
    );
};

export default AppLoading;
