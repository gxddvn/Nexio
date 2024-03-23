import React, { useRef, useState } from "react";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import Publication from "./Publication";
import axios from '../../axios.js';

const Home = () => {
    const [publications, setPublications] = useState([]);
    const bottom = useRef(null);
    const page = useRef(1);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                console.log("Loading...");
                axios.get(`/publication?page=${page.current}&limit=5`)
                .then((res) => {
                    setPublications(prevPublications => prevPublications.concat(res.data.rows));
                })
                .catch((err) => {
                    console.warn(err);
                    alert("Error!");
                });
                page.current = page.current + 1;
            }
        });
        observer.observe(bottom.current);
    }, []);

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
            {publications.map((publication, index) => (
                <Publication key={index} publication={publication}/>
            ))}
            <div ref={bottom}/>
            {/* <button onClick={()=>{setLimit(limit+5)}}>clac</button> */}
        </main>
    );
};

export default Home;