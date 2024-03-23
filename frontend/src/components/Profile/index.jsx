import React from 'react'
import styles from "./Profile.module.css"
import { NavLink, useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { selectAuthData } from '../../Redux/Slices/auth'
import { useState } from 'react'
import axios from '../../axios.js'
import Publication from '../Home/Publication/index.jsx'

const Profile = () => {
    // const authData = useSelector(selectAuthData)
    // const [isMyProfile, setIsMyProfile] = useState(false)
    const [isUser, setIsUser] = useState({})
    const [isPage, setIsPage] = useState(1)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [publications, setPublications] = useState([]);

    const { id } = useParams()

    React.useEffect(() => {
        axios.get(`/profiles/${id}`)
        .then((res) => {
            setIsUser(res.data)
        })
        .catch((err) => {
            console.warn(err)
            alert("Error!")
        });
    }, [id])

    React.useEffect(() => {
        if (isPage === 1) {
            axios.get(`/publication/profilesall/${id}`)
            .then((res) => {
                setPublications(res.data.rows)
            })
            .catch((err) => {
                console.warn(err)
                alert("Error!")
            });
        } else if (isPage === 2) {
            axios.get(`/publication/profilesall/${id}`)
            .then((res) => {
                setPublications(res.data.rows)
            })
            .catch((err) => {
                console.warn(err)
                alert("Error!")
            });
        } else if (isPage === 3) {
            axios.get(`/reposts/profilesall/${id}`)
            .then((res) => {
                setPublications(res.data)
            })
            .catch((err) => {
                console.warn(err)
                alert("Error!")
            });
        } else if (isPage === 4) {
            axios.get(`/savepublications/profilesall/${id}`)
            .then((res) => {
                setPublications(res.data)
            })
            .catch((err) => {
                console.warn(err)
                alert("Error!")
            });
        }
    }, [isPage, id])

    if (isButtonDisabled) {
        setTimeout(() => setIsButtonDisabled(false), 2000);
    }

    console.log("Profile_render")

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
                            <span className={styles.pmhcrt_name}>{isUser.login}</span>
                            <button className={styles.pmhcrt_butt}>Edit profile</button>
                            <button className={styles.pmhcrt_butt}>Archive</button>
                            <div className={styles.pmhcrt_settings}></div>
                        </div>
                        <div className={styles.pmhcr_middle}>
                            <span className={styles.pmhcrm_span}>{isUser.num_publications || 0} publications</span>
                            <span className={styles.pmhcrm_span}>{isUser.num_subscribers || 0} subscribers</span>
                            <span className={styles.pmhcrm_span}>{isUser.num_subscriptions || 0} subscriptions</span>
                        </div>
                        <div className={styles.pmhcr_bottom}>
                            <span className={styles.pmhcrb_span}>{isUser.name}</span>
                            {isUser.about && (
                                <span className={styles.pmhcrb_span1}>{isUser.about}</span>
                            )}
                            {isUser.link && (
                                <span className={styles.pmhcrb_spansite}>https://www.instagram.com/gxddvn19/</span>
                            )}
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
                    <div className={isPage === 1 ? styles.pmcc_block_active : styles.pmcc_block} onClick={() => {setIsPage(1)}} disabled={isButtonDisabled}>
                        <span className={styles.pmccb_span}>Posts</span>
                    </div>
                    <div className={isPage === 2 ? styles.pmcc_block_active : styles.pmcc_block} onClick={() => {setIsPage(2)}} disabled={isButtonDisabled}>
                        <div className={styles.pmccb_mediaimg}></div>
                        <span className={styles.pmccb_span}>Media</span>
                    </div>
                    <div className={isPage === 3 ? styles.pmcc_block_active : styles.pmcc_block} onClick={() => {setIsPage(3)}} disabled={isButtonDisabled}>
                        <div className={styles.pmccb_repimg}></div>
                        <span className={styles.pmccb_span}>Reposts</span>
                    </div>
                    <div className={isPage === 4 ? styles.pmcc_block_active : styles.pmcc_block} onClick={() => {setIsPage(4)}} disabled={isButtonDisabled}>
                        <div className={styles.pmccb_savesimg}></div>
                        <span className={styles.pmccb_span}>Saves</span>
                    </div>
                </div>
            </div>
            <div className={styles.pm_publications}>
                {isPage === 1 && (
                    <div className={styles.pmp_cont1}>
                        {publications.map((publication, index) => (
                            <Publication key={index} publication={publication} profile={isUser}/>
                        ))}
                    </div>
                )}
                {isPage === 2 && (
                    <div className={styles.pmp_cont}>
                        {publications.map((publication, index) => (
                            <div key={index} className={styles.pmpc_publication}>
                                <NavLink to='/profile' className={styles.pmpcp_nav}></NavLink>
                                <img alt="" className={styles.pmpcp_img} src={publication.img}/>
                            </div>
                        ))}
                    </div>
                )}
                {isPage === 3 && (
                    <div className={styles.pmp_cont1}>
                        {publications.map((publication, index) => (
                            <Publication key={index} publication={publication} profile={isUser}/>
                        ))}
                    </div>
                )}
                {isPage === 4 && (
                    <div className={styles.pmp_cont}>
                        {publications.map((publication, index) => (
                            <div key={index} className={styles.pmpc_publication}>
                                <NavLink to='/profile' className={styles.pmpcp_nav}></NavLink>
                                <img alt="" className={styles.pmpcp_img} src={publication.img}/>
                            </div>
                        ))}
                    </div>
                )}
                {/* <div className={styles.pmp_cont}>
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
                </div> */}
            </div>
        </div>
    )
}

export default Profile