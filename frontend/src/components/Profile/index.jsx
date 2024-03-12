import React, { useEffect } from 'react'
import styles from "./Profile.module.css";
import { NavLink } from 'react-router-dom';

const Profile = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.p_main}>
            <div className={styles.pm_buttlist}>
                <div className={styles.pmb_cont}>
                    <NavLink to='/' className={styles.pmb_home}></NavLink>
                    <NavLink to='/search' className={styles.pmb_search}></NavLink>
                    <div className={styles.pmb_newpost}></div>
                    <NavLink to='/notifications' className={styles.pmb_notification}></NavLink>
                    <NavLink to='/direct' className={styles.pmb_direct}></NavLink>
                </div>
            </div>
            <div className={styles.pm_head}>
                <div className={styles.pmh_cont}>
                    <div className={styles.pmhc_left}>
                        <div className={styles.pmhcl_avatar}></div>
                    </div>
                    <div className={styles.pmhc_right}>
                        <div className={styles.pmhcr_top}>
                            <span className={styles.pmhcrt_name}>gxddvn</span>
                            <button className={styles.pmhcrt_butt}>Edit profile</button>
                            <button className={styles.pmhcrt_butt}>Archive</button>
                            <div className={styles.pmhcrt_settings}></div>
                        </div>
                        <div className={styles.pmhcr_middle}>
                            <span className={styles.pmhcrm_span}>1 publications</span>
                            <span className={styles.pmhcrm_span}>320 subscribers</span>
                            <span className={styles.pmhcrm_span}>319 subscriptions</span>
                        </div>
                        <div className={styles.pmhcr_bottom}>
                            <span className={styles.pmhcrb_span}>Bogdan Maltsev</span>
                            <span className={styles.pmhcrb_span1}>McDocnac</span>
                            <span className={styles.pmhcrb_spansite}>https://www.instagram.com/gxddvn19/</span>
                        </div>
                    </div>
                </div>
                <div className={styles.pmh_stories}>
                    <div className={styles.pmhs_cont}>
                        <div className={styles.pmhs_addstorie}></div>
                        <span className={styles.pmhs_name}>Add</span>
                    </div>
                    <div className={styles.pmhs_cont}>
                        <div className={styles.pmhs_storie}></div>
                        <span className={styles.pmhs_name}>Love</span>
                    </div>
                    <div className={styles.pmhs_cont}>
                        <div className={styles.pmhs_storie}></div>
                        <span className={styles.pmhs_name}>Chocolate</span>
                    </div>
                    <div className={styles.pmhs_cont}>
                        <div className={styles.pmhs_storie}></div>
                        <span className={styles.pmhs_name}>LOL</span>
                    </div>
                    <div className={styles.pmhs_cont}>
                        <div className={styles.pmhs_storie}></div>
                        <span className={styles.pmhs_name}>Sea1</span>
                    </div>
                    <div className={styles.pmhs_cont}>
                        <div className={styles.pmhs_storie}></div>
                        <span className={styles.pmhs_name}>Egypt</span>
                    </div>
                    <div className={styles.pmhs_cont}>
                        <div className={styles.pmhs_storie}></div>
                        <span className={styles.pmhs_name}>Greece</span>
                    </div>
                    <div className={styles.pmhs_cont}>
                        <div className={styles.pmhs_storie}></div>
                        <span className={styles.pmhs_name}>France</span>
                    </div>
                    <div className={styles.pmhs_cont}>
                        <div className={styles.pmhs_storie}></div>
                        <span className={styles.pmhs_name}>Germany</span>
                    </div>
                </div>
            </div>
            <div className={styles.pm_catalog}>
                <div className={styles.pmc_cont}>
                    <div className={styles.pmcc_block}>
                        <span className={styles.pmccb_span}>Posts</span>
                    </div>
                    <div className={styles.pmcc_block}>
                        <div className={styles.pmccb_mediaimg}></div>
                        <span className={styles.pmccb_span}>Media</span>
                    </div>
                    <div className={styles.pmcc_block}>
                        <div className={styles.pmccb_repimg}></div>
                        <span className={styles.pmccb_span}>Reposts</span>
                    </div>
                    <div className={styles.pmcc_block}>
                        <div className={styles.pmccb_savesimg}></div>
                        <span className={styles.pmccb_span}>Saves</span>
                    </div>
                </div>
            </div>
            <div className={styles.pm_publications}>
                <div className={styles.pmp_cont}>
                    <div className={styles.pmpc_publication}>
                        <NavLink to='/profile' className={styles.pmpcp_nav}></NavLink>
                        <img alt="" className={styles.pmpcp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                    </div>
                    <div className={styles.pmpc_publication}>
                        <NavLink to='/profile' className={styles.pmpcp_nav}></NavLink>
                        <img alt="" className={styles.pmpcp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                    </div>
                    <div className={styles.pmpc_publication}>
                        <NavLink to='/profile' className={styles.pmpcp_nav}></NavLink>
                        <img alt="" className={styles.pmpcp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                    </div>
                    <div className={styles.pmpc_publication}>
                        <NavLink to='/profile' className={styles.pmpcp_nav}></NavLink>
                        <img alt="" className={styles.pmpcp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                    </div>
                    <div className={styles.pmpc_publication}>
                        <NavLink to='/profile' className={styles.pmpcp_nav}></NavLink>
                        <img alt="" className={styles.pmpcp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                    </div>
                    <div className={styles.pmpc_publication}>
                        <NavLink to='/profile' className={styles.pmpcp_nav}></NavLink>
                        <img alt="" className={styles.pmpcp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                    </div>
                    <div className={styles.pmpc_publication}>
                        <NavLink to='/profile' className={styles.pmpcp_nav}></NavLink>
                        <img alt="" className={styles.pmpcp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                    </div>
                    <div className={styles.pmpc_publication}>
                        <NavLink to='/profile' className={styles.pmpcp_nav}></NavLink>
                        <img alt="" className={styles.pmpcp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                    </div>
                    <div className={styles.pmpc_publication}>
                        <NavLink to='/profile' className={styles.pmpcp_nav}></NavLink>
                        <img alt="" className={styles.pmpcp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile