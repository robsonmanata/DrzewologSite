import './sectionC.css';
import TreeClimber from '/images/makwiramiti.jpg';



function SectionC () {
  return (
    <div className="sectionC">
     <div className="sectionC-left">
    
      <img className="sectionC-img" src={TreeClimber} alt="sectionC"></img>
    </div>

      <div className="sectionC-right">
  
 <h1>🌳Pielęgnacja drzew dojrzałych</h1>
          <p>Jeżeli to konieczne to wykonamy redukcje, zdejmiemy susz, ewakuujemy części 
          uszkodzone i niebezpieczne. Dbamy o kondycję i estetykę drzew z uwzględnieniem 
          ich biologii oraz lokalnych warunków.</p>

      </div>
     
    

    </div>
  );
    
};

export default SectionC;