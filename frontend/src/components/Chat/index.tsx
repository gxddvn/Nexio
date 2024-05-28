import React, { useEffect, useRef } from 'react';
import styles from "./Chat.module.css";
import { NavLink } from "react-router-dom";

const Chat = () => {
    const chatContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const chatContainer = chatContainerRef.current;
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, []);

    return (
        <div className={styles.c_main}> 
            <div className={styles.c_head}>
                <div className={styles.ch_cont}>
                    <div className={styles.chc_block}>
                        <NavLink to='/direct/' className={styles.chc_back}></NavLink>
                        <div className={styles.chc_blocknav}>
                            <div className={styles.chc_avatar}></div>
                            <div className={styles.chc_block1}>
                                <span className={styles.chc_name}>gxddvn</span>
                                <span className={styles.chc_span}>last seen within a month</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.chc_block}>
                        <div className={styles.chc_butt}></div>
                    </div>
                </div>
            </div>
            <div className={styles.c_middle}>
                <div className={styles.cm_blocks} ref={chatContainerRef}>
                    <div className={styles.cm_blockMe}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi what r u doing?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockAnother}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi! nothing, and u?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockMe}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi what r u doing?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockAnother}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi! nothing, and u?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockMe}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi what r u doing?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockAnother}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi! nothing, and u?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockMe}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi what r u doing?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockAnother}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi! nothing, and u?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockMe}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi what r u doing?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockAnother}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi! nothing, and u?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockMe}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi what r u doing?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockAnother}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi! nothing, and u?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockMe}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi what r u doing?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockAnother}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi! nothing, and u?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockMe}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi what r u doing?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockAnother}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi! nothing, and u?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockMe}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi what r u doing?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockAnother}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi! nothing, and u?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockMe}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi what r u doing?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockAnother}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi! nothing, and u?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockMe}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi what r u doing?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockAnother}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi! nothing, and u?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockMe}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi what r u doing?</span>
                        </div>
                    </div>
                    <div className={styles.cm_blockAnother}>
                        <div className={styles.cmb_cont}>
                            <span className={styles.cmb_message}>Hi! nothing, and u?</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cm_buttons}>
                    <input className={styles.cmb_input} type="text" placeholder='Enter the text...' />
                    <div className={styles.cmb_contbutt}>
                        <div className={styles.cmb_emojibutt}></div>
                        <div className={styles.cmb_sendbutt}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat