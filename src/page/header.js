import React from "react"
import Logo from "../img/LS.png"


function Header() {

  function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('show'); 
  }
  
    return (

    <div className="header-div">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <header className="header">
        <div className="header-logo-name">
        <img src={Logo} alt="logo" className="logo"/>
        <h1>VegetarianRecepie.it</h1>
        </div>

        <div className="header-hamburger-menu">
        <div className="hamburger" onClick={toggleMenu}>☰</div>
        <nav className="mobile-menu">
        <ul>
        <li><button onClick={toggleMenu} className="hamburger-button">Web page </button></li>
        <li><a href="https://www.instagram.com/lucasanniaa/" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://www.instagram.com/lucasanniaa/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a></li>
        <li><a href="https://www.instagram.com/lucasanniaa/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://www.instagram.com/lucasanniaa/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
        </nav>
        </div>
       

        <navbar className="header-social">
        <a href="https://www.instagram.com/lucasanniaa/" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/lucasanniaa/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/lucasanniaa/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
        <a href="https://www.instagram.com/lucasanniaa/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
        </navbar>
        

        </header>
     </div>
    );
  }
  
  export default Header;