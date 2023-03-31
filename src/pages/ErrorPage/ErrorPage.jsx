import Styles from './ErrorPage.module.css'
import TheDeathStar from '../../assets/img/TheDeathStar.svg'
import { Link } from "react-router-dom";

export function ErrorPage() {
    return (
        <div className={Styles.errorPage}>
            <div className={Styles.error}>
                <img className={Styles.DeadthStar} src={TheDeathStar} alt='TheDeathStar' />
            </div>
            <div className={Styles.buttonContainer}>
                <Link to='/' className={Styles.button}>Return</Link>
            </div>
        </div>
    );
}