import './sectionG.css';
import car from '/images/car.jpg';




function SectionG () {
  return (
    <div className="sectionG">
    

      <div className="sectionG-right">
  
 <h1>🛠 Sprzęt i technika</h1>
          <p>Dysponujemy nowoczesnym zapleczem technicznym: wywrotkami, rębakami,
           pełną gamą sprzętu arborystycznego i ogrodniczego, posługujemy się głównie
            narzędziami akumulatorowymi – dzięki czemu nasza praca jest skuteczna i cicha.</p>

      </div>
      <div className="sectionG-left">
    
      <img className="sectionG-img" src={car} alt="sectionD"></img>
    </div>
    

    </div>
  );
    
};

export default SectionG;