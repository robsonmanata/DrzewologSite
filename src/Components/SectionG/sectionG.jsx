import './sectionG.css';
import car from '/images/car.jpg';




function SectionG () {
  return (
    <div className="sectionD">
    

      <div className="sectionD-right">
  
 <h1>🛠 Sprzęt i technika</h1>
          <p>Dysponujemy nowoczesnym zapleczem technicznym: wywrotkami, rębakami,
           pełną gamą sprzętu arborystycznego i ogrodniczego, posługujemy się głównie
            narzędziami akumulatorowymi – dzięki czemu nasza praca jest skuteczna i cicha.</p>

      </div>
      <div className="sectionD-left">
    
      <img className="sectionD-img" src={car} alt="sectionD"></img>
    </div>
    

    </div>
  );
    
};

export default SectionG;