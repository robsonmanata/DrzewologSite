import './sectionF.css';
import blackTruck from '/images/circleTrees.jpeg';
// import treeCare from '/images/treeCare.jpg';

function SectionF () {
  return (
    <div className="sectionF">
      <div className="sectionF-left">
        <img className="sectionF-img" src={blackTruck} alt="sectionF"></img>
      </div>

      <div className="sectionF-right">
        <h1>📋Opracowania dendrologiczne i inwentaryzacje</h1>
        <p>Sporządzamy profesjonalne opracowania dendrologiczne, raporty o stanie zdrowotnym drzew, 
        inwentaryzacje zieleni oraz ekspertyzy na potrzeby urzędów, projektów budowlanych czy 
        inwestycji.</p>
      </div>
    </div>
  );
}
export default SectionF;