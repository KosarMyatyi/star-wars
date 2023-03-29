import React from 'react';
import Styles from './Modal.module.css'
import hermaphrodite from '../../assets/img/hermaphrodite-icon.svg'
import closeIcon from '../../assets/img/closeIcon.svg'
import female from '../../assets/img/male-icon.svg'
import male from '../../assets/img/female-icon.svg'
import defaultIcon from '../../assets/img/default-icon.png'

const Modal = ({ active, setActive, children, people }) => {
    const checkColor = () => {
        switch (people.gender) {
            case 'male':
                return '#73D677';
            case 'female':
                return '#C956FF';
            case 'hermaphrodite':
                return '#F5DB13';
            default:
                return null;
        }
    }

    const checkGender = () => {
        switch (people.gender) {
            case 'male':
                return male;
            case 'female':
                return female;
            case 'hermaphrodite':
                return hermaphrodite;
            default:
                return defaultIcon;
        }
    }

    return (
        <div className={active ? Styles.modalActive : Styles.modalDisActive} onClick={() => setActive(false)}>
            <div className={active ? Styles.modalContentActive : Styles.modalContentDisActive} onClick={e => e.stopPropagation()}>
                {children}
                <div className={Styles.modalCardContainer}>
                    <div className={Styles.leftPart}>
                        <img className={Styles.modalCardImg} src={checkGender()} alt='gender'></img>
                        <div className={Styles.modalCardBoxContainerLeft}>
                            {people.gender !== ('n/a' || 'none') && <div className={Styles.modalCardGender} style={{ background: checkColor() }}> {people.gender} </div>}
                            {people.birth_year !== 'unknown' && <div className={Styles.modalCardBirthYear}> {people.birth_year} </div>}
                        </div>
                    </div>
                    <div className={Styles.rightPart}>
                        <div onClick={() => setActive(false)} className={Styles.modalWindowClose}>
                            <img src={closeIcon} alt='closeIcon' />
                        </div>
                        <div className={Styles.modalCardName}>
                            {people.name}
                        </div>
                        <div className={Styles.cardBoxAbilities}>
                            {people.hair_color !== 'n/a' && <div className={Styles.hairColor}> Hair color: {people.hair_color} <br /></div>}
                            {people.skin_color !== 'n/a' && <div className={Styles.hairColor}> Skin color: {people.skin_color} <br /></div>}
                        </div>
                        <div className={Styles.modalCardBoxContainerRight}>
                            <div className={Styles.cardCounterBoxHeigth}>
                                <div className={Styles.cardHeight}>
                                    {people.height === 'unknown' ? 0 : people.height}
                                </div>
                                <div className={Styles.cardDescHeight}>
                                    height
                                </div>
                            </div>
                            <div className={Styles.cardCounterBoxMass}>
                                <div className={Styles.cardMass}>
                                    {people.mass === 'unknown' ? 0 : people.mass}
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