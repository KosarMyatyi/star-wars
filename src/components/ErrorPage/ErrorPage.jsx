import Styles from './ErrorPage.module.css'
import Error from '../../assets/img/Error.svg'
import TheDeathStar from '../../assets/img/TheDeathStar.svg'
import { useNavigate, useRouteError } from "react-router-dom";

export function ErrorPage() {

    const error = useRouteError();
    console.error(error);

    const navigate = useNavigate()

    return (
        <div className={Styles.errorPage}>
            <div className={Styles.error}>
                <img src={Error} alt='Error' />
            </div>
            <div className={Styles.DeadthStar} >
                <img src={TheDeathStar} alt='TheDeathStar' />
            </div>
            <div>
                <button onClick={() => navigate('/')} className={Styles.button}>Return</button>
            </div>
        </div>
    );
}