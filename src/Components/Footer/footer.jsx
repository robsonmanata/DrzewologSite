import './footer.css';
import footerLogo from '/images/DrzewologLogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="footer">
      <img src={footerLogo} alt="Drzewolog Logo"></img>
      <div className="footerBrands">
      <a href="https://www.instagram.com/drzewolog/"><FontAwesomeIcon  icon={faInstagram} className='icon' /></a>
      <a href="https://www.facebook.com/drzewolog"><FontAwesomeIcon  icon={faFacebook} className='icon'/></a>
        </div>
      
        <p>© 2023 Drzewolog. All rights reserved.</p>
        
      
    </div>
  );
}           
export default Footer;