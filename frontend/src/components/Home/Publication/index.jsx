import React, { useState } from 'react'
import styles from "./Publication.module.css"
import axios from '../../../axios.js'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../../Redux/Slices/auth.js'

const Publication = ({publication, profile = {}}) => {
    const [user, setUser] = useState(profile)
    // const [isProfileLoading, setIsProfileLoading] = useState(profile.id ? true : false);
    const [isLiked, setIsLiked] = useState(false)
    const [isRepost, setIsRepost] = useState(false)
    const [isSave, setIsSave] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [numLikes, setNumLikes] = useState(publication.num_likes)
    const [numReposts, setNumReposts] = useState(publication.num_reposts)
    const isAuth = useSelector(selectIsAuth)
    const userMe = useSelector((state) => state.auth.user || [])
    const isProfileLoading = profile.id ? true : false

    React.useEffect(() => {
        // console.log("useEffect1")
        if (!isProfileLoading) {
            axios.get(`/profiles/${publication.profilesTableId}`)
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => {
                console.warn(err)
                alert("Error!")
            });
        }
    }, [publication, isProfileLoading])

    React.useEffect(() => {
        // console.log("useEffect2")
        if (publication && userMe) {
            axios.get(`/publication/checkactions/${publication.id}/${userMe.id}`)
            .then((res) => {
                if (res.data) {
                    if (res.data.likes) {
                        setIsLiked(true)
                    }
                    if (res.data.repost) {
                        setIsRepost(true)
                    }
                    if (res.data.save_pub) {
                        setIsSave(true)
                    }
                }
            })
            .catch((err) => {
                console.warn(err)
                alert("Error!")
            })
        }
    }, [publication, userMe])

    const handleLikeClick = () => {
        // console.log("handleLikeClick")
        if (!isButtonDisabled && isAuth && publication) {
            axios.post(`/likespublications/`, {id_publication: publication.id, id_profile: userMe.id})
            .then((res) => {
                setNumLikes(res.data.num_likes)
                setIsLiked(!isLiked)
                setIsButtonDisabled(true)
            })
            .catch((err) => {
                console.warn(err)
                alert("Error!")
            })
        }
    }

    const handleRepostClick = () => {
        // console.log("handleRepostClick")
        if (!isButtonDisabled && isAuth && publication) {
            axios.post(`/reposts/`, {id_publication: publication.id, id_profile: userMe.id})
            .then((res) => {
                setNumReposts(res.data.num_reposts)
                setIsRepost(!isRepost)
                setIsButtonDisabled(true)
            })
            .catch((err) => {
                console.warn(err)
                alert("Error!")
            })
        }
    }

    const handleSaveClick = () => {
        // console.log("handleSaveClick")
        if (!isButtonDisabled && isAuth && publication) {
            axios.post(`/savepublications/`, {id_publication: publication.id, id_profile: userMe.id})
            .then((res) => {
                setIsSave(!isSave)
                setIsButtonDisabled(true)
            })
            .catch((err) => {
                console.warn(err)
                alert("Error!")
            })
        }
    }

    if (isButtonDisabled) {
        setTimeout(() => setIsButtonDisabled(false), 2000);
    }
    // console.log("pub");
    return (
        <div className={styles.hm_publication}>
            <div className={styles.hmp_top}>
                <div className={styles.hmpt_logocont}>
                    <div className={styles.hmptl_logo}></div>
                    <span className={styles.hmptl_name}>{user.login}</span>
                </div>
                <div className={styles.hmpt_butt}></div>
            </div>
            <div className={styles.hmp_middle}>
                <div className={styles.hmpm_photo}>
                    <img alt="" className={styles.hmpm_img} src={publication.img}/>
                </div>
                <div className={styles.hmpm_butt}>
                    <div className={styles.hmpmb_cont}>
                        <div className={isLiked ? styles.hmpbb_likes_active : styles.hmpbb_likes} onClick={handleLikeClick} disabled={isButtonDisabled}></div>
                        <div className={styles.hmpmbc_span}>{numLikes}</div>
                    </div>
                    <div className={styles.hmpmb_cont}>
                        <div className={styles.hmpbb_comments}></div>
                        <div className={styles.hmpmbc_span}>{publication.num_comments}</div>
                    </div>
                    <div className={styles.hmpmb_cont}>
                        <div className={isRepost ? styles.hmpbb_repost_active : styles.hmpbb_repost} onClick={handleRepostClick} disabled={isButtonDisabled}></div>
                        <div className={styles.hmpmbc_span}>{numReposts}</div>
                    </div>
                    <div className={styles.hmpmb_cont}>
                        <div className={isSave ? styles.hmpbb_save_active : styles.hmpbb_save} onClick={handleSaveClick}></div>
                    </div>
                </div>
                <div className={styles.hmpm_overcont}>
                    <span className={styles.hmpmo_overview}><span className={styles.hmpmo_name}>{user.login}:</span> {publication.caption}</span>
                </div>
            </div>
        </div>
    )
}

export default Publication