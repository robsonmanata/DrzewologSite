import "./navigationBar.css"
import logo from "/images/DrzewologLogo.jpg";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import {Link} from 'react-router-dom';



 function NavigationBar(myProps) {
  

  const[animated,Setanimation] =useState(false); 

    const animation = ()=> {
      Setanimation(!animated);   
  }
    return(  
      <div> 
<div className="navigation">
<div className="logoimgontainer">
<Link onClick={()=> animated? animation():null} to="/">
<img className="logoimg" src={logo} alt="logo"></img>
</Link>

</div>

<div className={"dropdown"}>
<div onClick={()=>animation()} className={animated? 'humburger1 ':"humburger"}>
<span></span>
<span></span>
<span></span>
</div>  
</div>
<div className="links">
    <Link to="/">Strona główna </Link>
     <Link onClick={()=>{myProps.scrollSection(myProps.services);myProps.setStartAnimation(); animation()}}  to={`/#servicesid`}>Usułg </Link>
    
    <Link to="/Onas/onas">O nas </Link>
    <Link onClick={()=>animation()} to="/Portfolio/portfolio">Portfolio</Link>
    <button onClick={()=>{myProps.scrollSection(myProps.hireMe) ; animation()}}><Link to={`/#hireMeid`}>Kontakt</Link></button>
    </div>
     <a href="https://www.instagram.com/drzewolog/"><FontAwesomeIcon  icon={faInstagram} className='icon' /></a>
      <a href="https://www.facebook.com/drzewolog"><FontAwesomeIcon  icon={faFacebook} className='icon'/></a>
     <a href="tel:+48886772991"><FontAwesomeIcon className="icon" icon={faPhone} /></a>
    
    </div> 
    <div className={animated? "dropdown-content1":"dropdown-content"}>
    <Link onClick={()=>animation()} to="/">Strona główna </Link>
    <Link onClick={()=>{myProps.scrollSection(myProps.services) ;myProps.setStartAnimation();animation()}} to={`/#servicesid`}>Usułg</Link>
    <Link onClick={()=>animation()} to="/Onas/onas">O nas </Link>
    <Link onClick={()=>animation()} to="/Portfolio/portfolio">Portfolio</Link>
    <button onClick={()=>{myProps.scrollSection(myProps.hireMe) ; animation()}}><Link to="/#hireMeid">Kontakt</Link></button>
  </div>  
 

</div>

    )
}

export default NavigationBar;
