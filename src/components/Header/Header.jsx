import Styles from './Header.module.css'
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={Styles.header}>
            <div className={Styles.content}>
                <img src={logo} alt='logo' className={Styles.logo} />
                <div className={Styles.headerNav} >
                    <Link className={Styles.nav} to='/'>Home</Link>
                    <Link className={Styles.nav} to='/characters'>Characters</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;