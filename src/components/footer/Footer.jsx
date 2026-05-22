import './footer.css'

import { Link } from 'react-router-dom'
export const Footer = () =>{

    return(
        <footer className="footer">
         
           <Link to="https://www.facebook.com/" target="_blank">
              <img alt="logoFacebook" src={"img/facebook.png"} />
              
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <img alt="logoInstagram" src={"img/instagram.png"} />
              
            </Link>
            <h3>web diseñada por YesDev</h3>
            </footer>

    )
}