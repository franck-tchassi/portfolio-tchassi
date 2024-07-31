import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import './contact.scss'
import {MdOutlineMailOutline } from 'react-icons/md';
import { FaPhone } from "react-icons/fa6";
import { FaCopy } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Contact = () => {
    const [isCopy, setIsCopy] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const form = useRef()
    const my_email = "franckraulin8@gmail.com"

    const copyMail = ()=>{
      navigator.clipboard.writeText(my_email)
      setIsCopy(!isCopy)

      toast.success("email copiée")

     // setTimeout(() => {
       // setIsCopy(false);
      //}, 2000)
    }
   
    
    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_bg7p3ca', 'template_zh93hoj', form.current,  'QkqavOvl7wMJiu6jF')
        .then(()=> {
          toast.success("message envoyé")
        },
        (error)=>{
          toast.error("erreur d'envoie")
        }
        );
    };

    useEffect(()=>{
      Aos.init({duration:1000})
    })
    
    
  return (
    <section className="contact section-padding" id="contact">
      <div className="section-title" data-aos="fade-up">
        <h4>ME CONTACTER</h4>
      </div>

      <div className="contact_container-title wrapper" data-aos="fade-up">
        <h4>DÉMARRONS UN PROJECT ENSEMBLE, N'ÉSITEZ PAS À ME CONTACTER</h4>
      </div>
      <div className="contact_container wrapper">
        <div className="contact_left" data-aos="fade-right">

          <form  ref={form} onSubmit={sendEmail}>
            <input type='text' name='user_name' aria-label="Nom" placeholder='Nom' required value={userName} onChange={(e)=> setUserName(e.target.value)}/>
            <input type='email' name='user_email' aria-label="Adresse e-mail" placeholder='Adresse e-mail' required value={userEmail} onChange={(e)=> setUserEmail(e.target.value)}/>
            <textarea name='message' cols={30} rows={10} className='form-message' aria-label="Votre message" placeholder='Votre message' required/>
            <button type='submit' className='btn'>ME CONTACTER</button>
          </form>
        </div>

        <div className="contact_right" data-aos="zoom-in-left">
          <h3>Mes Coordonnées</h3>
          <div className='contact_info'>
            <div className='contact_info-mail'>
              <div className='icon-email'>
                <MdOutlineMailOutline className='icon'/>
              </div>
              <p>{my_email}</p>
            </div>
            <div className='contact_info-phone'>
              <div className='icon-phone'>
                 <FaPhone className='icon'/>
              </div>
              <p>+33 06.56.83.98.96</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact