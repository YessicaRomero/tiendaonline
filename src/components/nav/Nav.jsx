import { Link } from "react-router-dom"
import './nav.css'
export const Nav  = () =>{

return(
    <nav>
        <ul className="nav-list ">
            <li>
    <Link to={"/"}>Home</Link></li>
    <li> 
        <Link to={"/carro"}>Card</Link>
        </li>
    </ul>
    </nav>
)

}