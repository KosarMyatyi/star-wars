import Styles from './ErrorPage.module.css'
import Error from '../../assets/img/Error.svg'
import TheDeathStar from '../../assets/img/TheDeathStar.svg'
import { useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={Styles.errorPage}>
            <div>
                <img src={Error} alt='Error' />
            </div>
            <div className={Styles.DeadthStar} >
                <img src={TheDeathStar} alt='TheDeathStar' />
            </div>
            <div>
                <button className={Styles.button}>Return</button>
            </div>
        </div>
    );
}