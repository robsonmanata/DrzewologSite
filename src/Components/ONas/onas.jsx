import './onas.css';
import blackTruck from '/images/car.jpg';

function ONas() {
  return (
    <div>
     <div className="sectionOnas">
           <div className="sectionOnas-left">
             <img className="sectionOnas-img" src={blackTruck} alt="sectionF"></img>
           </div>
     
           <div className="sectionOnas-right">
             <h1>O nas</h1>
             <p>Działamy z pasją i zrozumieniem dla natury. Nasza firma powstała z potrzeby stworzenia usług arborystycznych na najwyższym poziomie – merytorycznym i technicznym. Pracujemy dla klientów prywatnych, firm, instytucji publicznych 
             i samorządów. Tworzymy zrównoważoną przestrzeń – zieloną, bezpieczną i estetyczną.</p>
           </div>
         </div>
         <div className="sectionOnasB">
    <div className="sectionOnasB-left">
      
    </div>

      <div className="sectionOnasB-right">
  
        <p>Nasza kadra to wykwalifikowani arboryści i dendrolodzy z wykształceniem 
        przyrodniczym oraz uprawnieniami do pracy metodami dostępu linowego. Pracujemy 
        zgodnie z najwyższymi standardami bezpieczeństwa i etyki zawodowej. Każde drzewo 
        traktujemy indywidualnie – z wiedzą, doświadczeniem i szacunkiem do natury.</p>
        

      </div>

    </div>
    </div>
  );
}
export default ONas;