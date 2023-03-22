import Styles from './Header.module.css'
import logo from '../../assets/img/logo.svg'

export const Header = () => {
    return (
        <div className={Styles.header}>
            <img src={logo} alt='logo' />
            <div>
                <nav className={Styles.headerNav} >
                    <ul>
                        <li>
                            <a className={Styles.nav} href='/home'>Home</a>
                            <a className={Styles.nav} href='/characters'>Characters</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}