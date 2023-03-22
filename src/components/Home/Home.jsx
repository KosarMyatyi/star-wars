import Styles from './Home.module.css'
import BannerYoda from '../../assets/img/BannerYoda.svg'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

    const navigate = useNavigate()

    return (
        <div className={Styles.greeting}>
            <div>
                <img className={Styles.BannerYoda} src={BannerYoda} alt='BannerYoda' />
            </div>
            <div>
                <h1 className={Styles.greetingH1}> <b>Find</b> all your <br /> favorite <br /> <b>character</b></h1>
                <h2 className={Styles.greetingH2}>You can find out all the <br /> information about your favorite <br /> characters</h2>
            </div>
            <div>
                <button onClick={() => navigate(`./characters}`)} className={Styles.greetingBtn}>See more...</button>
            </div>
        </div>
    )
}