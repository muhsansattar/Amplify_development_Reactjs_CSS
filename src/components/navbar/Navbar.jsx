import React, { useState } from "react";
import navbardata from "./navbarData";
import './Navbar.css';
import AmplifyIcon from '../../assets/amplifyicon.png';
const Navbar=()=>{
    let [menuOpen,setMenuOpen]=useState(false)
    let toggleMenu=()=>{
        setMenuOpen(!menuOpen);
    }
    return(
        <>
        <div className="fixed-width navbar-container">
           <nav>
                <a href="#"><img className="amplify-logo" src={AmplifyIcon}/></a>
                <div className="toggle-button" onClick={toggleMenu}><i className="fa-solid fa-bars"></i></div>
                <ul className={menuOpen? 'active':''}>
                   {navbardata.map((item, index)=>(
                      <li key={index}>
                        <a href={item.link} className="lato-bold">{item.name}</a>
                      </li>
                   ))}
                </ul>
            </nav>
        </div>
        </>
    )

}
export default Navbar;