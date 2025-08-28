import './sectionB.css';
import youngtree from '/images/youngtree.jpeg';




function SectionB () {
  return (
    <div className="sectionB">
    

      <div className="sectionB-right">
  
 <h1 id="servicesid">🌱Pielęgnacja drzew młodych</h1>
          <p>Specjalizujemy się w pielęgnacji młodych drzew, aby w przyszłości 
          były zdrowe, silne i
           wolne od wad strukturalnych. 
          To inwestycja w bezpieczną zieleń przyszłości.
Poprawny wzrost młodych drzew ma ogromne znaczenie dla przyszłych pokoleń i 
całych drzewostanów. Gdy drzewa rosną bez zakorka, konkurujących przewodników, z 
dobrze zbalansowaną koroną – ich otoczenie staje się bezpieczniejsze.W ofercie mamy 
rozwiązania abonamentowe w przystępnych cenach, 
idealne dla opieki nad dużymi drzewostanami. Opieka nad młodymi drzewami stanowi 
główny filar naszej działalności – 
zapewniamy im najlepszy start ku długowieczności i stabilności.</p>

      </div>
      <div className="sectionB-left">
    
      <img className="sectionB-img" src={youngtree} alt="sectionB"></img>
    </div>
    

    </div>
  );
    
};

export default SectionB;