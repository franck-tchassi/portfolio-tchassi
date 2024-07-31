import React, { useState, useEffect} from 'react'
import './navbar.scss'
import { useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    /*
    const location = useLocation()
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isScreen994px, setIsScreen994px] = useState(window.innerWidth < 996);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenHamburger = ()=>{
      setIsModalOpen(!isModalOpen)
    }

    const handleClick = (path)=>{
        setActiveLink(path)
    }

    useEffect(() => {
      const handleResize = () => {
        setIsScreen994px(window.innerWidth < 996);
      };
      

      window.addEventListener('resize', handleResize);

      // Vérifier initialement la largeur de l'écran
      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    */
   const [showNav, setShowNav] = useState(false)

  return( 
    <header className='navbar'>
        <div className='navbar_container wrapper'>
          <a href="#" className="navbar_logo" onClick={()=> setShowNav(false)}>FABELGANIE</a>

          <div className="navbar_links">
            <ul className={`${showNav? "show":""}`}>
                <li  onClick={()=> setShowNav(false)}>
                    <a href="#home">ACCUEIL</a>
                </li>   
                <li  onClick={()=> setShowNav(false)}>
                    <a href="#presentation">PRÉSENTATION</a>
                </li>
                <li onClick={()=> setShowNav(false)}>
                    <a href="#realisation">REALISATION</a>
                </li> 
                <li  onClick={()=> setShowNav(false)}>
                    <a href="#activites">ACTIVITÉS</a>
                </li>
                <li  onClick={()=> setShowNav(false)}>
                    <a href="#contact">CONTACT</a>
                </li>
                <li  onClick={()=> setShowNav(false)}>
                    <a href="https://drive.google.com/file/d/13KhLuxZZ0zPOpheejsMoClK3fdNZC5so/view?usp=drivesdk">CV</a>
                </li>
            </ul> 
          </div>
          <div className='navbar_menu' onClick={()=> setShowNav(!showNav)}>
            {showNav? <IoMdClose className='icon' /> : <GiHamburgerMenu className='icon' />}
          </div>
       </div>
    </header>
  )
    
}

export default Navbar