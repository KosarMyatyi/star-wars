import Styles from './Main.module.css'
import BannerYoda from '../../assets/img/BannerYoda.svg'

export const Main = () => {
    return (
        <div className={Styles.greeting}>
            <div className={Styles.leftPart}>
                <h1 className={Styles.greetingH1}> <b>Find</b> all your <br/> favorite <br/> <b>character</b></h1>
                <h2 className={Styles.greetingH2}>You can find out all the <br/> information about your favorite <br/> characters</h2>
                <button className={Styles.greetingBtn}>See more...</button>
            </div>
            <div className={Styles.rightPart}>
                <img className={Styles.BannerYoda} src={BannerYoda} alt='BannerYoda' />
            </div>
        </div>
    )
}