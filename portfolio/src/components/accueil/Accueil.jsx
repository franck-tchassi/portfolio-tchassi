import React, { useState, useEffect } from 'react'
import './accueil.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Accueil = () => {
  const [text, setText] = useState('');
  const fullText = 'je suis Franck Tchassi développeur web fullstack réact.Js & node.Js ';
  const [index, setIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isAdding) {
        if (index < fullText.length) {
          setText(prev => prev + fullText[index]);
          setIndex(prev => prev + 1);
          
        } else {
          setIsAdding(false);
          setTimeout(() => setIndex(index - 1), 500);
        }
      } else {
        if (index > 0) {
          setText(prev => prev.slice(0, -1));
          setIndex(prev => prev - 1);
          setTimeout(() =>  500);
        } else {
          setIsAdding(true);
          setTimeout(() => setIndex(2), 500);
        }
      }
    }, isAdding ? 200 : 300);

    return () => clearTimeout(timeout);
  }, [index, isAdding, fullText]);
  
  useEffect(()=>{
    AOS.init({  
      duration: 1000
    });
  }, []);

  return (
    <section className='accueil' id='home'>
      <div className="accueil_container wrapper">
        <div className="accueil_left" data-aos="fade-up">
          <h3>Bonjour,</h3>
          <h2>
            {text}
            <span className="cursor">|</span>
          </h2>
        </div>
        <div className="accueil_right"data-aos="fade-left" >
          <div>
            <div className='boule'></div>
          </div>
          <div className='hiboux'>
            <div className='hibou-eye-left'></div>
            <div className='hibou-eye-right'></div>
          </div>
          <div>
            <div className='brille1'></div>
          </div>
          <div>
            <div className='brille2'></div>
          </div>
          
        </div>
      </div>
      
      

      
    </section>
  )
}

export default Accueil