import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import Publication from "./Publication";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <main className={styles.h_main}>
            <div className={styles.hm_buttlist2}>
                <div className={styles.hmb_cont}>
                    <NavLink to='/profile' className={styles.hmbc2_profile}></NavLink>
                    <NavLink to='/' className={styles.hmb_nav}>Nexio</NavLink>
                    <div className={styles.hmbc2_settings}></div>
                </div>
            </div>
            <div className={styles.hm_buttlist}>
                <div className={styles.hmb_cont}>
                    <NavLink to='/' className={styles.hmb_home}></NavLink>
                    <NavLink to='/search' className={styles.hmb_search}></NavLink>
                    <NavLink to='/create' className={styles.hmb_newpost}></NavLink>
                    <NavLink to='/notifications' className={styles.hmb_notification}></NavLink>
                    <NavLink to='/direct' className={styles.hmb_direct}></NavLink>
                </div>
            </div>
            <div className={styles.hm_stories}>
                <div className={styles.hms_cont}>
                    <div className={styles.hms_storie}></div>
                    <span className={styles.hms_span}>gxddvn</span>
                </div>
                <div className={styles.hms_cont}>
                    <div className={styles.hms_storie}></div>
                    <span className={styles.hms_span}>gxddvn</span>
                </div>
                <div className={styles.hms_cont}>
                    <div className={styles.hms_storie}></div>
                    <span className={styles.hms_span}>gxddvn</span>
                </div>
                <div className={styles.hms_cont}>
                    <div className={styles.hms_storie}></div>
                    <span className={styles.hms_span}>gxddvn</span>
                </div>
                <div className={styles.hms_cont}>
                    <div className={styles.hms_storie}></div>
                    <span className={styles.hms_span}>gxddvn</span>
                </div>
                <div className={styles.hms_cont}>
                    <div className={styles.hms_storie}></div>
                    <span className={styles.hms_span}>gxddvn</span>
                </div>
            </div>
            <Publication />
            <Publication />
            <Publication />
            <Publication />
        </main>
    );
};

export default Home;