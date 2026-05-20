import Logo from '../../assets/Logo.png'
import './header.css'
import { Link } from 'react-router-dom'
import { Nav } from '../nav/Nav'


export const Header =( ) => {
return(
    <header >
        <div className='logo-container' >
            <Link to={"/"}>
        <img src={Logo} alt="logoDulcehogar" />
        <span>Dulce Hogar</span>
        </Link>
    </div>
        <Nav />
    </header>
    
)
}