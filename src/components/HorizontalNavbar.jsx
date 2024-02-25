/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../index.css';
import data from '../data.json'

const Modal = ({ isOpen, closeModal, selectedItem }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className={`modal-content ${isOpen ? 'open' : ''}`}>
        <h2>{selectedItem.name}</h2>
        <p>Descripción {selectedItem.description}</p>
        <p><span style={{ fontFamily: 'Raleway-SemiBold' }}>Profesor:</span> {selectedItem.instructor}</p>
        <p><span style={{ fontFamily: 'Raleway-SemiBold' }}>Días y horarios:</span> {selectedItem.dias + ' - ' + selectedItem.horarios}</p><br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '60px' }}>
          <button className='whoButton'>Inscribite acá</button>
          <button className='closeButton' onClick={closeModal}>Cerrar</button>
        </div>

      </div>
    </div >
  );
};

const DropdownButton = ({ label, items, isOpen, toggleDropdown, openModal }) => {
  return (
    <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
      <button onClick={() => toggleDropdown()}>{label}</button>
      <div className="dropdown">
        {items.map((item, index) => (
          <button className='contBut' key={index} onClick={() => openModal(item)}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const HorizontalNavbar = () => {
  const [openButton, setOpenButton] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleOpenButton = (buttonLabel) => {
    setOpenButton(openButton === buttonLabel ? null : buttonLabel);
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    if (selectedItem !== null) {
      const timeoutId = setTimeout(() => toggleOpenButton(null), 10);
      return () => clearTimeout(timeoutId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  const Data = data.Data;

  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      {Data.map((button, index) => (
        <DropdownButton
          key={index}
          label={button.label}
          items={button.items}
          isOpen={openButton === button.label}
          toggleDropdown={() => toggleOpenButton(button.label)}
          openModal={openModal}
        />
      ))}
      <Modal isOpen={selectedItem !== null} closeModal={() => setSelectedItem(null)} selectedItem={selectedItem} />
    </div>
  );
};

export default HorizontalNavbar;