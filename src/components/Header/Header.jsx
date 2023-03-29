import Styles from './Header.module.css'
import logo from '../../assets/img/logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className={Styles.header}>
            <div className={Styles.content}>
                <img src={logo} alt='logo' className={Styles.logo} />
                <div className={Styles.headerNav} >
                    <NavLink className={Styles.nav} to='/'
                        style={({ isActive }) => ({
                            borderBottom: isActive ? '3px solid rgba(207, 218, 176, 1)' : 'none'
                        })}>Home</NavLink>
                    <NavLink className={Styles.nav} to='/characters'
                        style={({ isActive }) => ({
                            borderBottom: isActive ? '3px solid rgba(207, 218, 176, 1)' : 'none'
                        })}>Characters</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;