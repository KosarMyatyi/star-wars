import Styles from './Header.module.css'
import logo from '../../assets/img/logo.svg'

const Header = () => {
    return (
        <div className={Styles.header}>
            <div className={Styles.content}>
                <img src={logo} alt='logo' className={Styles.logo} />
                <nav className={Styles.headerNav} >
                    <ul>
                        <li>
                            <a className={Styles.nav} href='/'>Home</a>
                            <a className={Styles.nav} href='/characters'>Characters</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;