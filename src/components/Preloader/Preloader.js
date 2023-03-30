import preloader from '../../assets/img/preloader.svg'
import Styles from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={Styles.preloader}>
            <img src={preloader} alt='preloader' />
        </div>
    )
}