import './footer.css'

import { Link } from 'react-router-dom'
export const Footer = () =>{

    return(
        <div className="footer">
           <h3>web diseñada por YesDev</h3>
           <Link to="https://www.facebook.com/" target="_blank">
              <img alt="logoFacebook" src={"/facebook.png"} />
            </Link>
            </div>

    )
}