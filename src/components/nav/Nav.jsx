import { Link } from "react-router-dom";
import { UseCart } from "../../context/CardContext";

export const Nav  = () =>{
const {getTotalItems} = UseCart(); 
const totalItems = getTotalItems();
return(
    <nav className="navbar navbar-expand-lg bg-secundario.bg-gradiente">
          <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
    <Link to={"/"} className="nav-link active fs-1 fw-semibold" aria-current="page">Home</Link></li>
    <li className="nav-item fs-2 text-decoration-none "> 
        <Link className='text-decoration-none' to={"/cart"}>🛒 {totalItems > 0 && <span>{totalItems}</span> }</Link>
        </li>
    </ul>
    </div>
    </nav>
)

}