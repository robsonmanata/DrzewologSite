import './sectionD.css';
import tallBushes from '/images/tallBushes.jpg';




function SectionD () {
  return (
    <div className="sectionD">
    

      <div className="sectionD-right">
  
 <h1>🌲Pielęgnacja zieleni wysokiej</h1>
          <p>Obsługujemy żywopłoty i zieleń wysoką – bez względu na
           ich rozmiar. Redukujemy, formujemy i pielęgnujemy także 
           niskie żywopłoty z równą starannością.</p>

      </div>
      <div className="sectionD-left">
    
      <img className="sectionD-img" src={tallBushes} alt="sectionD"></img>
    </div>
    

    </div>
  );
    
};

export default SectionD;