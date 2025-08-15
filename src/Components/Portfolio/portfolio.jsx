import './portfolio.css';
import cleaning from '/images/cleaning.jpg';

function Portfolio() {
  return (

    <div >
        <div className="sectionE">
           <div className="sectionE-left">
          
            <img className="sectionE-img" src={cleaning} alt="sectionC"></img>
          </div>
      
            <div className="sectionE-right">
        
       <h1>Realizacje (Portfolio)</h1>
                <p>Zobacz wybrane projekty, które zrealizowaliśmy w 
                ostatnich latach: tutaj doślę zdjęcia jednak</p>
      
            </div>
           
          
      
          </div>

          <div className="Portfolio-grid">
          <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>
            
           <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>

           <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>
           <div className= "portfolio-item">
             <img src={cleaning} alt="Portfolio item 1" />
          </div>
            </div>
     
    </div>
  );
}

export default Portfolio;
