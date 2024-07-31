import React, { useEffect } from 'react';
import './realisation.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { travaux } from '../../travail.js';
import { IoArrowDownOutline } from "react-icons/io5";

const Realisation = ({ handleOpenModal }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);

  return (
    <section className='traveaux section-padding' id='realisation'>
      <div className='section-title' data-aos="fade-up">
        <h4>MES TRAVAUX</h4>
      </div>

      <div className="traveaux_container wrapper">
        {travaux.map((item) => (
          <div className="traveaux_card" data-aos="fade-down-right" key={item.id} onClick={() => handleOpenModal(item)}>
            <div className='title_content'>
              <h2>{item.title}</h2>
              <div className='click_me'>
                <p>click here</p>
                <IoArrowDownOutline className='icon' />
              </div>
            </div>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Realisation;