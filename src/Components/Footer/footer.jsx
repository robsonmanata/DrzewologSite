import './footer.css';
import footerLogo from '/images/DrzewologLogo.jpg';


function Footer() {
  return (
    <div className="footer">
      <img src={footerLogo} alt="Drzewolog Logo"></img>
      
        <p>© 2023 Drzewolog. All rights reserved.</p>
        
      
    </div>
  );
}           
export default Footer;