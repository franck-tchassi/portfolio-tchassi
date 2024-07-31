import React from 'react'
import './footer.scss'
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer_link'>
          <Link to="https://github.com/franck-tchassi" aria-label="GitHub de Franck Tchassi"> <GrGithub className='link'/> </Link>
          <Link to="https://www.linkedin.com/in/franck-tchassi-488098265/" aria-label="LinkedIn de Franck Tchassi"> <FaLinkedinIn className='link'/></Link>
          <Link to="https://www.instagram.com/franckabelganie/" aria-label="Instagram de Franck Abelganie"> <FaInstagram className='link'/></Link>
        </div>
        <p>&copy; 2024 Franck TCHASSI, Tous droits réservés.</p>
      
    </div>
  )
}

export default Footer