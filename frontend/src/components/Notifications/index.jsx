import React, { useEffect } from 'react';
import styles from "./Notifications.module.css";
import { NavLink } from 'react-router-dom';

const Notifications = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={styles.n_main}>
            <div className={styles.n_head}>
                <div className={styles.nh_cont}>
                    <span className={styles.nhc_span}>Notifications</span>
                </div>
            </div>
            <div className={styles.nm_buttlist}>
                <div className={styles.nmb_cont}>
                    <NavLink to='/' className={styles.nmb_home}></NavLink>
                    <NavLink to='/search' className={styles.nmb_search}></NavLink>
                    <NavLink to='/create' className={styles.nmb_newpost}></NavLink>
                    <NavLink to='/notifications' className={styles.nmb_notification}></NavLink>
                    <NavLink to='/direct' className={styles.nmb_direct}></NavLink>
                </div>
            </div>
            <div className={styles.nm_block}>
                <div className={styles.nmb_notif}>
                    <div className={styles.nmbn_cont}>
                        <div className={styles.nmbn_avatar}></div>
                        <span className={styles.nmbn_span}><span className={styles.nmbn_span1}>gxddvn</span> subscribed to your account. <span className={styles.nmbn_span2}>20h.</span></span>
                    </div>
                    <button className={styles.nmbn_button}>Subscribe</button>
                </div>
                <div className={styles.nmb_notif}>
                    <div className={styles.nmbn_cont}>
                        <div className={styles.nmbn_avatar}></div>
                        <span className={styles.nmbn_span}><span className={styles.nmbn_span1}>gxddvn</span> liked your publication. <span className={styles.nmbn_span2}>20h.</span></span>
                    </div>
                    <img className={styles.nmbn_img} alt=""  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.nmb_notif}>
                    <div className={styles.nmbn_cont}>
                        <div className={styles.nmbn_avatar}></div>
                        <span className={styles.nmbn_span}><span className={styles.nmbn_span1}>gxddvn</span> subscribed to your account. <span className={styles.nmbn_span2}>20h.</span></span>
                    </div>
                    <button className={styles.nmbn_button}>Subscribe</button>
                </div>
                <div className={styles.nmb_notif}>
                    <div className={styles.nmbn_cont}>
                        <div className={styles.nmbn_avatar}></div>
                        <span className={styles.nmbn_span}><span className={styles.nmbn_span1}>gxddvn</span> liked your publication. <span className={styles.nmbn_span2}>20h.</span></span>
                    </div>
                    <img className={styles.nmbn_img} alt=""  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.nmb_notif}>
                    <div className={styles.nmbn_cont}>
                        <div className={styles.nmbn_avatar}></div>
                        <span className={styles.nmbn_span}><span className={styles.nmbn_span1}>gxddvn</span> subscribed to your account. <span className={styles.nmbn_span2}>20h.</span></span>
                    </div>
                    <button className={styles.nmbn_button}>Subscribe</button>
                </div>
                <div className={styles.nmb_notif}>
                    <div className={styles.nmbn_cont}>
                        <div className={styles.nmbn_avatar}></div>
                        <span className={styles.nmbn_span}><span className={styles.nmbn_span1}>gxddvn</span> liked your publication. <span className={styles.nmbn_span2}>20h.</span></span>
                    </div>
                    <img className={styles.nmbn_img} alt=""  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.nmb_notif}>
                    <div className={styles.nmbn_cont}>
                        <div className={styles.nmbn_avatar}></div>
                        <span className={styles.nmbn_span}><span className={styles.nmbn_span1}>gxddvn</span> subscribed to your account. <span className={styles.nmbn_span2}>20h.</span></span>
                    </div>
                    <button className={styles.nmbn_button}>Subscribe</button>
                </div>
                <div className={styles.nmb_notif}>
                    <div className={styles.nmbn_cont}>
                        <div className={styles.nmbn_avatar}></div>
                        <span className={styles.nmbn_span}><span className={styles.nmbn_span1}>gxddvn</span> liked your publication. <span className={styles.nmbn_span2}>20h.</span></span>
                    </div>
                    <img className={styles.nmbn_img} alt=""  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.nmb_notif}>
                    <div className={styles.nmbn_cont}>
                        <div className={styles.nmbn_avatar}></div>
                        <span className={styles.nmbn_span}><span className={styles.nmbn_span1}>gxddvn</span> subscribed to your account. <span className={styles.nmbn_span2}>20h.</span></span>
                    </div>
                    <button className={styles.nmbn_button}>Subscribe</button>
                </div>
                <div className={styles.nmb_notif}>
                    <div className={styles.nmbn_cont}>
                        <div className={styles.nmbn_avatar}></div>
                        <span className={styles.nmbn_span}><span className={styles.nmbn_span1}>gxddvn</span> liked your publication. <span className={styles.nmbn_span2}>20h.</span></span>
                    </div>
                    <img className={styles.nmbn_img} alt=""  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.nmb_notif}>
                    <div className={styles.nmbn_cont}>
                        <div className={styles.nmbn_avatar}></div>
                        <span className={styles.nmbn_span}><span className={styles.nmbn_span1}>gxddvn</span> subscribed to your account. <span className={styles.nmbn_span2}>20h.</span></span>
                    </div>
                    <button className={styles.nmbn_button}>Subscribe</button>
                </div>
                <div className={styles.nmb_notif}>
                    <div className={styles.nmbn_cont}>
                        <div className={styles.nmbn_avatar}></div>
                        <span className={styles.nmbn_span}><span className={styles.nmbn_span1}>gxddvn</span> liked your publication. <span className={styles.nmbn_span2}>20h.</span></span>
                    </div>
                    <img className={styles.nmbn_img} alt=""  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
            </div>
        </div>
    )
}

export default Notifications