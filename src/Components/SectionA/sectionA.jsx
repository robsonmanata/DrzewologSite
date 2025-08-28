
import './sectionA.css';
import movie from '/images/movie3.mp4';
import { Link } from 'react-router-dom';



function SectionA (myProps) {
  return (
    <div className="sectionA">
   
    
      <video className="sectionA-video" autoPlay loop muted preload='auto'>
      <source src={movie} type="video/mp4" /> </video>
    

      <div className="sectionA-right">
  
        <p>Jesteśmy specjalistami w dziedzinie arborystyki i dendrologii. Oferujemy kompleksową opiekę nad drzewami – od młodych nasadzeń po wiekowe okazy. Pracujemy sprawnie i bezpiecznie.</p>
        <button className="sectionA-button">
        <Link  to={'/Onas/onas'}> Dowiedz się więcej</Link>
        </button>
         <button className="sectionA-button">
         
         <Link onClick={()=>{myProps.scrollSection(myProps.services);myProps.setStartAnimation()}}  to={`/#hireMeid`}>Poznaj naszą ofertę</Link>
        </button>

      </div>

    </div>
  );
    
};

export default SectionA;
