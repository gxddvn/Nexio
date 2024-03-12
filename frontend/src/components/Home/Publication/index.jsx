import React from 'react';
import styles from "./Publication.module.css";

const Publication = () => {
    return (
        <div className={styles.hm_publication}>
            <div className={styles.hmp_top}>
                <div className={styles.hmpt_logocont}>
                    <div className={styles.hmptl_logo}></div>
                    <span className={styles.hmptl_name}>gxddvn</span>
                </div>
                <div className={styles.hmpt_butt}></div>
            </div>
            <div className={styles.hmp_middle}>
                <div className={styles.hmpm_photo}>
                    <img alt="" className={styles.hmpm_img} src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"/>
                </div>
                <div className={styles.hmpm_butt}>
                    <div className={styles.hmpmb_cont}>
                        <div className={styles.hmpbb_likes}></div>
                        <div className={styles.hmpmbc_span}>100</div>
                    </div>
                    <div className={styles.hmpmb_cont}>
                        <div className={styles.hmpbb_comments}></div>
                        <div className={styles.hmpmbc_span}>100</div>
                    </div>
                    <div className={styles.hmpmb_cont}>
                        <div className={styles.hmpbb_repost}></div>
                        <div className={styles.hmpmbc_span}>100</div>
                    </div>
                    <div className={styles.hmpmb_cont}>
                        <div className={styles.hmpbb_save}></div>
                    </div>
                </div>
                <div className={styles.hmpm_overcont}>
                    <span className={styles.hmpmo_overview}><span className={styles.hmpmo_name}>gxddvn:</span> Мдаааа нравиться я не могу просто</span>
                </div>
            </div>
        </div>
    )
}

export default Publication