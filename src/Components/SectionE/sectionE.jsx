import './sectionE.css';
import cleaning from '/images/cleaning.jpg';



function SectionE () {
  return (
    <div className="sectionE">
     <div className="sectionE-left">
    
      <img className="sectionE-img" src={cleaning} alt="sectionC"></img>
    </div>

      <div className="sectionE-right">
  
 <h1>🧹Sprzątanie i wywóz pozostałości</h1>
          <p>Po każdej realizacji sprzątamy teren i wywozimy pozostałości: gałęzie, drewno, 
          liście i zrębki. Działamy kompleksowo — nie zostawiamy śladów po pracy, poza zdrowym 
          drzewem..</p>

      </div>
     
    

    </div>
  );
    
};

export default SectionE;