import styles from './CustomModal.module.css';
import Modal  from "react-modal";
// import { ReactComponent as CloseIcon } from './close-icon.svg';
import CloseIcon from './close-icon.svg';

const CustomModal = ({isOpen, onClose, submitButton, children}: { isOpen: boolean, onClose: () => void, submitButton?: string, children: React.ReactNode }) => {
    console.log("aga")
    return (
        <Modal isOpen={isOpen} overlayClassName={styles.modal_overlay} className={styles.modal_content} ariaHideApp={false} onRequestClose={() => onClose()}>
            <button className={styles.modal_close_button} onClick={() => onClose()}>
                <CloseIcon/>
            </button>
            <div className={styles.modal_content_div}>
                {children}  
            </div>
            {submitButton && (
                <button className={styles.modal_submit_button} onClick={() => onClose()}>{submitButton}</button>
            )}
        </Modal>
    )
}

export default CustomModal;