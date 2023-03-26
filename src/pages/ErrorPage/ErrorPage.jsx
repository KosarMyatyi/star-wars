import Styles from './ErrorPage.module.css'
import Error from '../../assets/img/Error.svg'
import TheDeathStar from '../../assets/img/TheDeathStar.svg'
import { Link } from "react-router-dom";

export function ErrorPage() {
    return (
        <div className={Styles.errorPage}>
            <div className={Styles.error}>
                <img src={Error} alt='Error' />
            </div>
            <div className={Styles.DeadthStar} >
                <img src={TheDeathStar} alt='TheDeathStar' />
            </div>
            <div>
                <Link to='/' className={Styles.button}>Return</Link>
            </div>
        </div>
    );
}