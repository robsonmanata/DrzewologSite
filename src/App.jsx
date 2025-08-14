
import './App.css';
import NavigationBar from './Components/NavigationBar/navigationBar';
import SectionA from './Components/SectionA/sectionA';
import SectionB from './Components/SectionB/sectionB';
import SectionC from './Components/SectionC/sectionC';
import SectionD from './Components/SectionD/sectionD';
import SectionE from './Components/SectionE/sectionE';
import SectionF from './Components/SectionF/sectionF';
import SectionG from './Components/SectionG/sectionG';
import SectionH from './Components/SectionH/sectionH';
import SectionI from './Components/SectionI/sectionI';
import { Routes,Route,useLocation } from 'react-router-dom';

import {useRef} from "react";
import { useState,useEffect } from 'react';



function App() {
  const [startAnimation,setStartAnimation] = useState(false) ;
  const myAnimation=()=>{
  
  setStartAnimation(!startAnimation) ;
  setTimeout(setStartAnimation,1000)
  
  }
  const services = useRef(null);
  const hireme = useRef(null);
  const scrollSection =(elementRef)=>{
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
   

  }

  const location = useLocation();

  useEffect(() => {
    const elementId = location.hash.substring(1); // Remove the leading '#' from the URL hash
    scrollToElement(elementId);
  }, [location]);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  
  return(
    <div>
    
   <NavigationBar hireMe={hireme} services={services} scrollSection={scrollSection} startAnimation={startAnimation} setStartAnimation={myAnimation}></NavigationBar>
   
   <div>
   <Routes>
   <Route path="/"  element={
    <div>
   <SectionA></SectionA>
    <SectionB></SectionB>
    <SectionC></SectionC>
    <SectionD></SectionD>
    <SectionE></SectionE>
    <SectionF></SectionF>
    <SectionG></SectionG>
    <SectionH></SectionH>
    <SectionI></SectionI>
    
    
   
   </div>

   }/>
  
   
   </Routes>
   
   </div>
  
</div>

  )
}

export default App
