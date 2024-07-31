import React from 'react';
import './card.scss';
import { MdClose } from "react-icons/md";

const Card = ({ travail, closeModal }) => {
  if (!travail) return null;

  return (
    <div className='card'>
      <div className='button_close' onClick={closeModal}><MdClose /></div>
      <div className='card_container'>
        <div className='card_img'>
            <h2>{travail.title}</h2>
            <div className='pictures'>
            {travail.pictures.map((pic, index) => (
                <img key={index} src={pic} alt={`Illustration de ${travail.title}`} />
            ))}
            </div>
        </div>
        <div className='card_tags'>
            <div className='description'>
                <h3>À propos du projet :</h3>
                <p>{travail.description}</p>
            </div>
            
            <div className='skills'>
                <h3>COMPÉTENCES :</h3>
                <div className='tags'>
                    {travail.tags.map((tag, index) => (
                        <span key={index} className='tag'>{tag}</span>
                    ))}
                </div>
            </div>
            
        </div>
      </div>
      
      
    </div>
  );
};

export default Card;