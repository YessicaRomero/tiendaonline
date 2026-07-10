import Logo from '../../assets/Logo.png'
import './header.css'
import { Link } from 'react-router-dom'
import { Nav } from '../nav/Nav'


export const Header =( ) => {
return(
    <header >
        <div className='logo-container text-color-danger p-2 bg-opacity-10 ' >
            <Link to={"/"} className='text-decoration-none'>
        <img src={Logo} alt="logoDulcehogar" />
        <span className='fs-1 text-decoration-none  object-fit-none text-danger p-3'>Dulce Hogar</span>
        </Link>
    </div>
        <Nav />
    </header>
    
)
}