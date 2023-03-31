import Styles from './HomePage.module.css'
import BannerYoda from '../../assets/img/BannerYoda.svg'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className={Styles.greeting}>
            <div className={Styles.containerContent}>
                <div className={Styles.leftPart}>
                    <h1 className={Styles.greetingH1}> <b>Find</b> all your <br /> favorite <br /> <b>character</b></h1>
                    <h2 className={Styles.greetingH2}>You can find out all the <br /> information about your favorite characters</h2>
                </div>
                <div className={Styles.rightPart}>
                    <img className={Styles.BannerYoda} src={BannerYoda} alt='BannerYoda' />
                </div>
            </div>
            <div className={Styles.buttonContain}>
                <Link to='/characters' className={Styles.greetingBtn}>See more...</Link>
            </div>
        </div>
    )
}

