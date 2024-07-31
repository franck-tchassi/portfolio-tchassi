import React, { useEffect } from 'react'
import './presentation.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Presentation = () => {

  useEffect(()=>{
    Aos.init({
      duration: 1000
    })
  }, [])

  return (
    <section className='presentation section-padding' id="presentation" data-aos="zoom-in-up">
      <div className="section-title">
        <h4>PRÉSENTATION</h4>
      </div>
      <div className="presentation_container wrapper">
        <p>
            Développeur passionné dans le domaine du web depuis plus de 6 ans, actuellement étudiant en développement web chez Openclassroom.
            Je conçois et réalise des sites web du cahier des charges à la mise en ligne.
            Je développe avec React.js pour le front-end et Node.js pour le back-end, ce qui me permet de créer des applications web modernes et performantes.
            Je développe également des applications mobiles.  
        </p>
        <div className='presentation_link'>
          <Link to="https://github.com/franck-tchassi" data-aos="flip-left" aria-label="GitHub de Franck Tchassi" > <GrGithub className='link'/> </Link>
          <Link to="https://www.linkedin.com/in/franck-tchassi-488098265/" data-aos="flip-left" aria-label="LinkedIn de Franck Tchassi"> <FaLinkedinIn className='link'/></Link>
          <Link to="https://www.instagram.com/franckabelganie/" data-aos="flip-left" aria-label="Instagram de Franck Abelganie"> <FaInstagram className='link'/></Link>
        </div>
      </div>
    </section>
    
  )
}

export default Presentation