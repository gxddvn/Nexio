import React, { useEffect } from 'react'
import styles from "./Search.module.css";
import { NavLink } from 'react-router-dom';

const Search = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={styles.s_main}>
            <div className={styles.s_head}>
                <div className={styles.sh_cont}>
                    <div className={styles.shc_search}></div>
                    <input type="search" placeholder='Search...' className={styles.shc_input}/>
                </div>
            </div>
            <div className={styles.sm_buttlist}>
                <div className={styles.smb_cont}>
                    <NavLink to='/' className={styles.smb_home}></NavLink>
                    <NavLink to='/search' className={styles.smb_search}></NavLink>
                    <NavLink to='/create' className={styles.smb_newpost}></NavLink>
                    <NavLink to='/notifications' className={styles.smb_notification}></NavLink>
                    <NavLink to='/direct' className={styles.smb_direct}></NavLink>
                </div>
            </div>
            <div className={styles.sm_recomendation}>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.smr_publication}>
                    <NavLink to='/search' className={styles.smrp_nav}></NavLink>
                    <img alt="" className={styles.smrp_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
            </div>
        </div>
    )
}

export default Search