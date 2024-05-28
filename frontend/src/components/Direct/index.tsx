import { useEffect } from "react";
import styles from "./Direct.module.css";
import { NavLink } from "react-router-dom";
import DirectComponent from "./DirectComponent";

const Direct = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={styles.d_main}>
            <div className={styles.dm_head}>
                <div className={styles.dmh_cont}>
                    <NavLink to='/' className={styles.dmhc_back}></NavLink>
                    <div className={styles.dmhc_nav}>Direct</div>
                    <div className={styles.dmhc_block}>
                        <div className={styles.dmhc_archive}></div>
                        <div className={styles.dmhc_settings}></div>
                    </div>
                </div>
            </div>
            <DirectComponent id="1120"/>
            <DirectComponent id="1120"/>
            <DirectComponent id="1120"/>
            <DirectComponent id="1120"/>
            <DirectComponent id="1120"/>
            <DirectComponent id="1120"/>
            <DirectComponent id="1120"/>
            <DirectComponent id="1120"/>
            <DirectComponent id="1120"/>
            <DirectComponent id="1120"/>
            <DirectComponent id="1120"/>
            <DirectComponent id="1120"/>
        </div>
    );
};

export default Direct;
