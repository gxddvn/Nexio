import styles from "./DirectComponent.module.css";
import { NavLink } from 'react-router-dom';

const DirectComponent = (props: {id:string}) => {
    return (
        <NavLink to={`chat/${props.id}`} className={styles.dm_chat}>
            <div className={styles.dmc_block}>
                <div className={styles.dmcb_cont1}>
                    <div className={styles.dmcb_avatar}></div>
                    <div className={styles.dmcb_cont}>
                        <span className={styles.dmcbc_name}>gxddvn</span>
                        <span className={styles.dmcbc_lmessage}>Hi! How are you?</span>
                    </div>
                </div>
                <div className={styles.dmcb_cont2}>
                    <span className={styles.dmcbc_data}>1 Jun</span>
                    <span className={styles.dmcbc_amountmess}>1</span>
                </div>
            </div>
        </NavLink>
    )
}

export default DirectComponent