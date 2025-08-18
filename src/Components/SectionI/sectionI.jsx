import './sectionI.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function SectionI() {
  return (
    <div id="hireMeid" className="sectionI">
    <div className="sectionI-left">
 <h1>Kontakt</h1>
      <h2>Masz pytania? Chcesz wycenić usługę? Skontaktuj się z nami – odpowiemy na każde zapytanie i 
      doradzimy najlepsze rozwiązanie.</h2>
      
        <li><a href="mailto: drzewolog@gmail.com"><FontAwesomeIcon className="icon" icon={faEnvelope} /> drzewolog@gmail.com</a> </li>  
        
        <li><a href="tel:+1234567890"><FontAwesomeIcon className="icon" icon={faPhone} /> +48 123 456 789</a></li>
        
       
    </div>
     
      </div>
    );  
}
export default SectionI;