import React from 'react';
import Styles from './Modal.module.css'
import hermaphrodite from '../../assets/img/hermaphrodite-icon.svg'
import closeIcon from '../../assets/img/closeIcon.svg'

const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? Styles.modalActive : Styles.modalDisActive} onClick={() => setActive(false)}>
            <div className={active ? Styles.modalContentActive : Styles.modalContentDisActive} onClick={e => e.stopPropagation()}>
                {children}
                <div className={Styles.modalCardContainer}>
                    <div className={Styles.leftPart}>
                        <img className={Styles.modalCardImg} src={hermaphrodite} alt='hermaphrodite'></img>
                        <div className={Styles.modalCardBoxContainerLeft}>
                            <div className={Styles.modalCardGender}>
                                hermaphrodite
                            </div>
                            <div className={Styles.modalCardBirthYear}>
                                600BBY
                            </div>
                        </div>
                    </div>
                    <div className={Styles.rightPart}>
                        <div className={Styles.modalWindowClose}>
                            <img src={closeIcon} alt='closeIcon' />
                        </div>
                        <div className={Styles.modalCardName}>
                            Jabba Desilijic Tiure
                        </div>
                        <div className={Styles.cardBoxAbilities}>
                            hair color: brown: brown<br />
                            skin color - white <br />
                            hair color: brown
                        </div>
                        <div className={Styles.modalCardBoxContainerRight}>
                            <div className={Styles.cardCounterBoxHeigth}>
                                <div className={Styles.cardHeight}>
                                    228
                                </div>
                                <div className={Styles.cardDescHeight}>
                                    height
                                </div>
                            </div>
                            <div className={Styles.cardCounterBoxMass}>
                                <div className={Styles.cardMass}>
                                    165
                                </div>
                                <div className={Styles.cardDescMass}>
                                    mass
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;