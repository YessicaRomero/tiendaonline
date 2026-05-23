import { Link } from "react-router-dom"
import './nav.css'
import { UseCart } from "../../context/CardContext"
export const Nav  = () =>{
const {getTotalItems} = UseCart(); 
const totalItems = getTotalItems();
return(
    <nav>
        <ul className="nav-list ">
            <li>
    <Link to={"/"}>Home</Link></li>
    <li> 
        <Link to={"/cart"}>🛒 {totalItems > 0 && <span>{totalItems}</span> }</Link>
        </li>
    </ul>
    </nav>
)

}