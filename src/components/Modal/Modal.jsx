import React from 'react';
import Styles from './Modal.module.css'

const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? Styles.modal : Styles.modalActive} onClick={() => setActive(false)}>
            <div className={active ? Styles.modalContent : Styles.modalContentActive} onClick={e => e.stopPropagation()}>
            {children}
            </div>
        </div>
    )
}

export default Modal;