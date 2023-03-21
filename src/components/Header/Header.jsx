import Styles from './Header.module.css'
import logo from '../../assets/img/logo.svg'

export const Header = () => {
    return (
        <div className={Styles.header}>
            <div className={Styles.content}>
                <img src={logo} alt='logo' className={Styles.logo}/>
                <nav className={Styles.headerNav}>
                    <a className={Styles.nav} href='/'>Home</a>
                    <a className={Styles.nav} href='/'>Characters</a>
                </nav>
            </div>
        </div>
    )
}