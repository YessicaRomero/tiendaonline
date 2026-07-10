import "./footer.css"
import {
  MDBFooter,
  MDBContainer,
 
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"

export const Footer = () =>{ 
  return (
    <MDBFooter className='bg-dark bg-opacity-25 text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-2'>

          <MDBBtn outline  floating className='m-2  ' href='https://www.facebook.com/' role='button'>
          <img src={facebook} alt="Facebook" className="social-icon"/>
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/' role='button'>
          <img src={instagram} alt="instragram" className="social-icon"  />
          </MDBBtn>

          

          
        </section>
      </MDBContainer>

      <div className='text-center p-3 text-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2026 Copyright:
        <a className='text-dark' href='https://github.com/YessicaRomero'>
          YesDev
          </a>
      </div>
    </MDBFooter>
  );
}