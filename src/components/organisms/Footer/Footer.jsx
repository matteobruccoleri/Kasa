import './Footer.module.scss';
import LogoWhite from '../../../assets/images/logo_kasa_white.svg'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <NavLink to="/">
                <img src={LogoWhite} alt='Kasa, la location d’appartements entre particuliers en France'/>
            </NavLink>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer