import './portfolio.css';
import cleaning from '/images/cleaning.jpg';
import photoGrid from '/images/photoGrid.jpg';
import circleTrees from '/images/circleTrees.jpeg';
import yard from '/images/yard.jpeg';
import beforeAfter from '/images/beforeAfter.jpeg';
import ones from '/images/1.jpg';
    
import threes from '/images/3.jpg';
import fours from '/images/4.jpg'; 
import fives from '/images/5.jpeg';
import tallBushes from '/images/tallBushes.jpg';
import sixes from '/images/sixes.jpg';

function Portfolio() {
  return (

    <div >
        <div className="sectionPortfolio">
           <div className="sectionPortfolio-left">
          
            <img className="sectionPortfolio-img" src={photoGrid} alt="sectionC"></img>
          </div>
      
            <div className="sectionPortfolio-right">
        
       <h1>Realizacje (Portfolio)</h1>
                <p>Zobacz wybrane projekty, które zrealizowaliśmy w 
                ostatnich latach: tutaj doślę zdjęcia jednak</p>
      
            </div>
           
          
      
          </div>

          <div className="Portfolio-grid">
          <div className= "portfolio-item">
             <img src={threes} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={fours} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={fives} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={tallBushes} alt="Portfolio item 1" />
          </div>
          <div className= "portfolio-item">
             <img src={circleTrees} alt="Portfolio item 1" />
          </div>
            
           <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={yard} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={beforeAfter} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={ones} alt="Portfolio item 1" />
          </div>

           <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>
           
           <div className= "portfolio-item">
             <img src={sixes} alt="Portfolio item 1" />
          </div>
            </div>
     
    </div>
  );
}

export default Portfolio;
