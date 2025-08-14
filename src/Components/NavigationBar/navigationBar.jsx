import "./navigationBar.css"
import logo from "/images/DrzewologLogo.jpg";
import instagramIcon from "/images/instagram-brands-solid-full.svg";
import facebookIcon from "/images/facebook-f-brands-solid-full.svg";
import phoneIcon from "/images/phone-solid-full.svg";
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
     <Link onClick={()=>{myProps.scrollSection(myProps.services);myProps.setStartAnimation(); animation()}}  to={`/#servicesid`}>O nas </Link>
    
    <Link to="/SectionA/sectionA">Usług </Link>
    <Link onClick={()=>animation()} to="/Blog/blog">Portfolio</Link>
    <button onClick={()=>{myProps.scrollSection(myProps.hireMe) ; animation()}}><Link to={`/#hireMeid`}>Kontakt</Link></button>
    </div>
     <img className="imgicon" src={instagramIcon} alt="instagram icon"></img>
     <img className="imgicon" src={facebookIcon} alt="Facebook icon"></img>
     <img className="imgicon" src={phoneIcon} alt="call icon"></img>
    </div> 
    <div className={animated? "dropdown-content1":"dropdown-content"}>
    <Link onClick={()=>animation()} to="/">Strona główna </Link>
    <Link onClick={()=>{myProps.scrollSection(myProps.services) ;myProps.setStartAnimation();animation()}} to={`/#servicesid`}>O nas</Link>
    <Link onClick={()=>animation()} to="/Websitedesign/portfolio">Usług </Link>
    <Link onClick={()=>animation()} to="/Blog/blog">Portfolio</Link>
    <button onClick={()=>{myProps.scrollSection(myProps.hireMe) ; animation()}}><Link to="/#hireMeid">Kontakt</Link></button>
  </div>  
 

</div>

    )
}

export default NavigationBar;
