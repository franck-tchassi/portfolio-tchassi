import React, { useState } from 'react';
import Contact from './components/contact/Contact';
import { ToastContainer } from 'react-toastify';
import Accueil from './components/accueil/Accueil';
import Footer from './components/footer/Footer';
import Presentation from './components/presentation/Presentation';
import Services from './components/services/Services';
import Realisation from './components/realisation/Realisation';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';
import './app.scss'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTravail, setSelectedTravail] = useState(null);

  const handleOpenModal = (travail) => {
    setSelectedTravail(travail);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTravail(null);
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Accueil />
      <Presentation />
      <Services />
      <Realisation handleOpenModal={handleOpenModal} />
      <Contact />
      <Footer />
      
      {isModalOpen && (
        <div className='modal'>
          <div className='modal_overlay' onClick={handleCloseModal}></div>
          <div className='modal_content'>
            <Card travail={selectedTravail} closeModal={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
