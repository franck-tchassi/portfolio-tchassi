import React, { useEffect } from 'react'
import './services.scss'
import { RiCodeSSlashFill } from "react-icons/ri";
import { RiComputerLine } from "react-icons/ri";
import { FaSketch } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Services = () => {

  useEffect(()=>{
    Aos.init({duration: 1000})
  }, [])

  return (
    <section className="services section-padding" id='activites'>
      <div className="section-title" data-aos="fade-up">
        <h4>MES SERVICES</h4>
      </div>
      <div className='services_container wrapper'>

        <div className="services_card" data-aos="zoom-out" >
          <div className="services_card-icone">
              <RiComputerLine  className='s_icons'/>
          </div>
          <h2>MULTI - PLATEFORME</h2>
          <p>Compatible tous supports, tablette & application mobile</p>
        </div>

        <div className="services_card" data-aos="zoom-out" >
          <div className="services_card-icone">
              <RiCodeSSlashFill className='s_icons' />
          </div>
          <h2>DÉVELOPPEMENT WEB</h2>
          <p>Création de site web | Application sur-mesure repondant aux besoins des clients</p>
        </div>

        <div className="services_card" data-aos="zoom-out" >
          <div className="services_card-icone">
              <FaSketch className='s_icons' />
          </div>
          <h2>PROJETS WEB</h2>
          <p>site vitrine, e-commerce, intranet, application web &amp; mobile.</p>
        </div>

        <div className="services_card" data-aos="zoom-out" >
          <div className="services_card-icone">
              <FaBullseye className='s_icons' />
          </div>
          <h2>RÉFERENCEMENT SEO</h2>
          <p>Framework, code optimiser pour le référencement naturel</p>
        </div>

        <div className="services_card" data-aos="zoom-out" >
          <div className="services_card-icone">
              <FaRegHandshake className='s_icons' />
          </div>
          <h2>ACCOMPAGNEMENT</h2>
          <p>Je gère entièrement les projets en assurant une communication constante</p>
        </div>

        <div className="services_card" data-aos="zoom-out" >
          <div className="services_card-icone">
              <FaRocket className='s_icons' />
          </div>
          <h2>MAINTENANCE WEB</h2>
          <p>Gestion d'hébérgement, garanti d'accessibilité, intégration régulière des mises à jour de sécurité</p>
        </div>
      </div>
      
    </section>
  )
}

export default Services