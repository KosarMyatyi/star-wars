import Styles from './HomePage.module.css'
import BannerYoda from '../../assets/img/BannerYoda.svg'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className={Styles.greeting}>
            <div className={Styles.leftPart}>
                <h1 className={Styles.greetingH1}> <b>Find</b> all your <br /> favorite <br /> <b>character</b></h1>
                <h2 className={Styles.greetingH2}>You can find out all the <br /> information about your favorite <br /> characters</h2>
                <Link to='/characters' className={Styles.greetingBtn}>See more...</Link>
            </div>
            <div className={Styles.rightPart}>
                <img className={Styles.BannerYoda} src={BannerYoda} alt='BannerYoda' />
            </div>
        </div>
    )
}

