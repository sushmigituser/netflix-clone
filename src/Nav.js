import React,{useState,useEffect} from "react";
import "./Nav.css";
function Nav() {
    const [show,handleShow] =useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        };

    },[]);
    return (
        <div>
            <div className={`nav ${show && "nav__black"}`}>
             <img
             className="nav__logo"
             src="/img/Netflix_Logo_CMYK.png"
             alt="Netflix Logo"
             />
             <img 
             className="nav__avatar"
             src="/img/Avatar_Logo.png"
             alt="Netflix Logo"
             />
            </div>
        </div>
    );
}

export default Nav
