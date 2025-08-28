
import './sectionH.css';
import treeCare from '/images/car.jpg';
import circleTrees from '/images/circleTrees.jpeg';
import yard from '/images/yard.jpeg';

import ones from '/images/1.jpg';
    
import threes from '/images/3.jpg';
import fours from '/images/4.jpg'; 
import fives from '/images/5.jpeg';
import tallBushes from '/images/tallBushes.jpg';
import sixes from '/images/sixes.jpg';

function SectionH() {
  return (
    <div className="sectionH">
      <h1>Realizacje (Portfolio)</h1>
<ul>
  <li>
    <img src={treeCare}></img>
  </li>
   <li>
    <img src={threes}></img>
  </li>
   <li>
    <img src={fours}></img>
  </li>
   <li>
    <img src={fives}></img>
  </li>
   <li>
    <img src={ones}></img>
  </li>
   <li>
    <img src={tallBushes}></img>
  </li>
   <li>
    <img src={circleTrees}></img>
  </li>
  <li>
    <img src={yard}></img>
  </li>
  <li>
    <img src={sixes}></img>
  </li>
  
</ul>

    </div>
  );
}
export default SectionH;