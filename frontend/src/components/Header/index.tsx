import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const HeaderMain = () => {
    const [leftMenu, setleftMenu] = React.useState(false);

    return (
        <div className={styles.h_block}>
            <div className={styles.hb_inner}>
                <div className={styles.hbi_cont}>
                    <div onClick={() => setleftMenu(!leftMenu)} className={styles.hbil_border}>
                        <div className={styles.hbils_icon}></div>
                    </div>
                </div>
                <div className={styles.hbi_cont}>
                    <div className={styles.hbic_logoButt}>
                        <NavLink to='/' ><span className={styles.hbicl_nav}>Nexio</span></NavLink>
                    </div>
                </div>
                <div className={styles.hbi_cont}>
                    <div className={styles.hbil_border}>
                        <div className={styles.hbird_icon}></div>
                    </div>
                </div>
            </div>
            <div className={`${styles.hb_innercont} ${leftMenu ? `${styles.hb_innercont_active}` : ''}`}>
                <div className={styles.hbi_block}>
                    <div className={styles.hbi_profile}></div>
                    <div className={styles.hbi_settings}></div>
                    <div className={styles.hbi_logout}></div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
